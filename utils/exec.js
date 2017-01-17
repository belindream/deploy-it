const exec = require('child_process').exec

module.exports = (cmd, opts) => {
	let isArray = Array.isArray(cmd)
	cmd = (isArray)? cmd.join(' && ') : cmd
	opts || (opts = {});
	return new Promise((resolve, reject) => {
		const child = exec(cmd, opts,
			(err, stdout, stderr) => err ? reject(err) : resolve({
				stdout: stdout,
				stderr: stderr
			}));

		if (opts.stdout) {
			child.stdout.pipe(opts.stdout);
		}
		if (opts.stderr) {
			child.stderr.pipe(opts.stderr);
		}
	});
}
/**

exec(
	['pwd', 'ls', 'cd ../lumand-web']
  , {
		stdout: new stream.Writable({
			write: (chunk, enc, next) => {
				console.log(chunk.toString());
				next();
			}
		})
	  , stderr: new stream.Writable({
			write: (chunk, enc, next) => {
				console.error(chunk.toString());
				next();
			}
		})
	}
).then((out) => console.log(out)).catch(err => console.log(err))
*/
