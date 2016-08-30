SystemJS.config({
    paths: {
        "npm:": "jspm_packages/npm/",
        "github:": "jspm_packages/github/",
        "app/": "app/"
    },
    browserConfig: {
        "baseURL": "/"
    },
    devConfig: {
        "map": {
            "ts": "github:frankwallis/plugin-typescript@5.0.9",
            "plugin-babel": "npm:systemjs-plugin-babel@0.0.13",
            "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.6.0",
            "chokidar-socket-emitter": "npm:chokidar-socket-emitter@0.5.4",
            "fsevents": "npm:fsevents@1.0.14",
            "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
            "jsbn": "npm:jsbn@0.1.0",
            "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
            "jodid25519": "npm:jodid25519@1.0.2",
            "tweetnacl": "npm:tweetnacl@0.13.3",
            "http": "github:jspm/nodelibs-http@0.2.0-alpha",
            "url": "github:jspm/nodelibs-url@0.2.0-alpha",
            "net": "github:jspm/nodelibs-net@0.2.0-alpha",
            "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha",
            "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
            "https": "github:jspm/nodelibs-https@0.2.0-alpha",
            "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
            "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
            "dns": "github:jspm/nodelibs-dns@0.2.0-alpha",
            "dgram": "github:jspm/nodelibs-dgram@0.2.0-alpha",
            "open": "npm:open@0.0.5",
            "http-server": "npm:http-server@0.9.0"
        },
        "packages": {
            "github:frankwallis/plugin-typescript@5.0.9": {
                "map": {
                    "typescript": "npm:typescript@2.0.0"
                }
            },
            "github:capaj/systemjs-hot-reloader@0.6.0": {
                "map": {
                    "debug": "npm:debug@2.2.0",
                    "weakee": "npm:weakee@1.0.0",
                    "socket.io-client": "github:socketio/socket.io-client@1.4.8"
                }
            },
            "npm:debug@2.2.0": {
                "map": {
                    "ms": "npm:ms@0.7.1"
                }
            },
            "npm:chokidar-socket-emitter@0.5.4": {
                "map": {
                    "commander": "npm:commander@2.9.0",
                    "chokidar": "npm:chokidar@1.6.0",
                    "socket.io": "npm:socket.io@1.4.8"
                }
            },
            "npm:chokidar@1.6.0": {
                "map": {
                    "path-is-absolute": "npm:path-is-absolute@1.0.0",
                    "is-binary-path": "npm:is-binary-path@1.0.1",
                    "glob-parent": "npm:glob-parent@2.0.0",
                    "anymatch": "npm:anymatch@1.3.0",
                    "async-each": "npm:async-each@1.0.0",
                    "is-glob": "npm:is-glob@2.0.1",
                    "inherits": "npm:inherits@2.0.1",
                    "readdirp": "npm:readdirp@2.1.0"
                }
            },
            "npm:commander@2.9.0": {
                "map": {
                    "graceful-readlink": "npm:graceful-readlink@1.0.1"
                }
            },
            "npm:glob-parent@2.0.0": {
                "map": {
                    "is-glob": "npm:is-glob@2.0.1"
                }
            },
            "npm:socket.io@1.4.8": {
                "map": {
                    "debug": "npm:debug@2.2.0",
                    "socket.io-parser": "npm:socket.io-parser@2.2.6",
                    "socket.io-adapter": "npm:socket.io-adapter@0.4.0",
                    "has-binary": "npm:has-binary@0.1.7",
                    "engine.io": "npm:engine.io@1.6.11",
                    "socket.io-client": "npm:socket.io-client@1.4.8"
                }
            },
            "npm:socket.io-parser@2.2.6": {
                "map": {
                    "debug": "npm:debug@2.2.0",
                    "component-emitter": "npm:component-emitter@1.1.2",
                    "json3": "npm:json3@3.3.2",
                    "benchmark": "npm:benchmark@1.0.0",
                    "isarray": "npm:isarray@0.0.1"
                }
            },
            "npm:anymatch@1.3.0": {
                "map": {
                    "arrify": "npm:arrify@1.0.1",
                    "micromatch": "npm:micromatch@2.3.11"
                }
            },
            "npm:socket.io-adapter@0.4.0": {
                "map": {
                    "socket.io-parser": "npm:socket.io-parser@2.2.2",
                    "debug": "npm:debug@2.2.0"
                }
            },
            "npm:is-binary-path@1.0.1": {
                "map": {
                    "binary-extensions": "npm:binary-extensions@1.5.0"
                }
            },
            "npm:socket.io-parser@2.2.2": {
                "map": {
                    "debug": "npm:debug@0.7.4",
                    "component-emitter": "npm:component-emitter@1.1.2",
                    "json3": "npm:json3@3.2.6",
                    "benchmark": "npm:benchmark@1.0.0",
                    "isarray": "npm:isarray@0.0.1"
                }
            },
            "npm:is-glob@2.0.1": {
                "map": {
                    "is-extglob": "npm:is-extglob@1.0.0"
                }
            },
            "npm:readdirp@2.1.0": {
                "map": {
                    "set-immediate-shim": "npm:set-immediate-shim@1.0.1",
                    "readable-stream": "npm:readable-stream@2.1.4",
                    "minimatch": "npm:minimatch@3.0.3",
                    "graceful-fs": "npm:graceful-fs@4.1.5"
                }
            },
            "npm:engine.io@1.6.11": {
                "map": {
                    "debug": "npm:debug@2.2.0",
                    "base64id": "npm:base64id@0.1.0",
                    "engine.io-parser": "npm:engine.io-parser@1.2.4",
                    "accepts": "npm:accepts@1.3.1",
                    "ws": "npm:ws@1.0.1"
                }
            },
            "npm:socket.io-client@1.4.8": {
                "map": {
                    "debug": "npm:debug@2.2.0",
                    "socket.io-parser": "npm:socket.io-parser@2.2.6",
                    "has-binary": "npm:has-binary@0.1.7",
                    "component-emitter": "npm:component-emitter@1.2.0",
                    "component-bind": "npm:component-bind@1.0.0",
                    "object-component": "npm:object-component@0.0.3",
                    "indexof": "npm:indexof@0.0.1",
                    "to-array": "npm:to-array@0.1.4",
                    "backo2": "npm:backo2@1.0.2",
                    "parseuri": "npm:parseuri@0.0.4",
                    "engine.io-client": "npm:engine.io-client@1.6.11"
                }
            },
            "npm:micromatch@2.3.11": {
                "map": {
                    "is-extglob": "npm:is-extglob@1.0.0",
                    "is-glob": "npm:is-glob@2.0.1",
                    "array-unique": "npm:array-unique@0.2.1",
                    "arr-diff": "npm:arr-diff@2.0.0",
                    "object.omit": "npm:object.omit@2.0.0",
                    "normalize-path": "npm:normalize-path@2.0.1",
                    "filename-regex": "npm:filename-regex@2.0.0",
                    "regex-cache": "npm:regex-cache@0.4.3",
                    "parse-glob": "npm:parse-glob@3.0.4",
                    "extglob": "npm:extglob@0.3.2",
                    "expand-brackets": "npm:expand-brackets@0.1.5",
                    "kind-of": "npm:kind-of@3.0.4",
                    "braces": "npm:braces@1.8.5"
                }
            },
            "npm:fsevents@1.0.14": {
                "map": {
                    "nan": "npm:nan@2.4.0",
                    "node-pre-gyp": "npm:node-pre-gyp@0.6.29"
                }
            },
            "npm:has-binary@0.1.7": {
                "map": {
                    "isarray": "npm:isarray@0.0.1"
                }
            },
            "npm:engine.io-parser@1.2.4": {
                "map": {
                    "has-binary": "npm:has-binary@0.1.6",
                    "blob": "npm:blob@0.0.4",
                    "base64-arraybuffer": "npm:base64-arraybuffer@0.1.2",
                    "after": "npm:after@0.8.1",
                    "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
                    "utf8": "npm:utf8@2.1.0"
                }
            },
            "npm:has-binary@0.1.6": {
                "map": {
                    "isarray": "npm:isarray@0.0.1"
                }
            },
            "npm:minimatch@3.0.3": {
                "map": {
                    "brace-expansion": "npm:brace-expansion@1.1.6"
                }
            },
            "npm:engine.io-client@1.6.11": {
                "map": {
                    "debug": "npm:debug@2.2.0",
                    "ws": "npm:ws@1.0.1",
                    "component-emitter": "npm:component-emitter@1.1.2",
                    "indexof": "npm:indexof@0.0.1",
                    "engine.io-parser": "npm:engine.io-parser@1.2.4",
                    "parseuri": "npm:parseuri@0.0.4",
                    "yeast": "npm:yeast@0.1.2",
                    "component-inherit": "npm:component-inherit@0.0.3",
                    "xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.1",
                    "parsejson": "npm:parsejson@0.0.1",
                    "parseqs": "npm:parseqs@0.0.2",
                    "has-cors": "npm:has-cors@1.1.0",
                    "node-ws": "npm:ws@1.0.1",
                    "node-xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.1"
                }
            },
            "npm:extglob@0.3.2": {
                "map": {
                    "is-extglob": "npm:is-extglob@1.0.0"
                }
            },
            "npm:parse-glob@3.0.4": {
                "map": {
                    "is-extglob": "npm:is-extglob@1.0.0",
                    "is-glob": "npm:is-glob@2.0.1",
                    "is-dotfile": "npm:is-dotfile@1.0.2",
                    "glob-base": "npm:glob-base@0.3.0"
                }
            },
            "npm:node-pre-gyp@0.6.29": {
                "map": {
                    "mkdirp": "npm:mkdirp@0.5.1",
                    "nopt": "npm:nopt@3.0.6",
                    "rc": "npm:rc@1.1.6",
                    "rimraf": "npm:rimraf@2.5.4",
                    "tar": "npm:tar@2.2.1",
                    "tar-pack": "npm:tar-pack@3.1.4",
                    "npmlog": "npm:npmlog@3.1.2",
                    "semver": "npm:semver@5.2.0",
                    "request": "npm:request@2.74.0"
                }
            },
            "npm:ws@1.0.1": {
                "map": {
                    "options": "npm:options@0.0.6",
                    "bufferutil": "npm:bufferutil@1.2.1",
                    "utf-8-validate": "npm:utf-8-validate@1.2.1",
                    "ultron": "npm:ultron@1.0.2"
                }
            },
            "npm:accepts@1.3.1": {
                "map": {
                    "negotiator": "npm:negotiator@0.6.0",
                    "mime-types": "npm:mime-types@2.1.11"
                }
            },
            "npm:bufferutil@1.2.1": {
                "map": {
                    "nan": "npm:nan@2.4.0",
                    "bindings": "npm:bindings@1.2.1"
                }
            },
            "npm:utf-8-validate@1.2.1": {
                "map": {
                    "nan": "npm:nan@2.4.0",
                    "bindings": "npm:bindings@1.2.1"
                }
            },
            "npm:tar@2.2.1": {
                "map": {
                    "inherits": "npm:inherits@2.0.1",
                    "fstream": "npm:fstream@1.0.10",
                    "block-stream": "npm:block-stream@0.0.9"
                }
            },
            "npm:object.omit@2.0.0": {
                "map": {
                    "is-extendable": "npm:is-extendable@0.1.1",
                    "for-own": "npm:for-own@0.1.4"
                }
            },
            "npm:parseuri@0.0.4": {
                "map": {
                    "better-assert": "npm:better-assert@1.0.2"
                }
            },
            "npm:regex-cache@0.4.3": {
                "map": {
                    "is-primitive": "npm:is-primitive@2.0.0",
                    "is-equal-shallow": "npm:is-equal-shallow@0.1.3"
                }
            },
            "npm:expand-brackets@0.1.5": {
                "map": {
                    "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
                }
            },
            "npm:parsejson@0.0.1": {
                "map": {
                    "better-assert": "npm:better-assert@1.0.2"
                }
            },
            "npm:parseqs@0.0.2": {
                "map": {
                    "better-assert": "npm:better-assert@1.0.2"
                }
            },
            "npm:is-equal-shallow@0.1.3": {
                "map": {
                    "is-primitive": "npm:is-primitive@2.0.0"
                }
            },
            "npm:glob-base@0.3.0": {
                "map": {
                    "glob-parent": "npm:glob-parent@2.0.0",
                    "is-glob": "npm:is-glob@2.0.1"
                }
            },
            "npm:rc@1.1.6": {
                "map": {
                    "ini": "npm:ini@1.3.4",
                    "deep-extend": "npm:deep-extend@0.4.1",
                    "strip-json-comments": "npm:strip-json-comments@1.0.4",
                    "minimist": "npm:minimist@1.2.0"
                }
            },
            "npm:brace-expansion@1.1.6": {
                "map": {
                    "concat-map": "npm:concat-map@0.0.1",
                    "balanced-match": "npm:balanced-match@0.4.2"
                }
            },
            "npm:braces@1.8.5": {
                "map": {
                    "repeat-element": "npm:repeat-element@1.1.2",
                    "preserve": "npm:preserve@0.2.0",
                    "expand-range": "npm:expand-range@1.8.2"
                }
            },
            "npm:kind-of@3.0.4": {
                "map": {
                    "is-buffer": "npm:is-buffer@1.1.4"
                }
            },
            "npm:mkdirp@0.5.1": {
                "map": {
                    "minimist": "npm:minimist@0.0.8"
                }
            },
            "npm:rimraf@2.5.4": {
                "map": {
                    "glob": "npm:glob@7.0.5"
                }
            },
            "npm:glob@7.0.5": {
                "map": {
                    "inherits": "npm:inherits@2.0.1",
                    "minimatch": "npm:minimatch@3.0.3",
                    "path-is-absolute": "npm:path-is-absolute@1.0.0",
                    "once": "npm:once@1.3.3",
                    "fs.realpath": "npm:fs.realpath@1.0.0",
                    "inflight": "npm:inflight@1.0.5"
                }
            },
            "npm:mime-types@2.1.11": {
                "map": {
                    "mime-db": "npm:mime-db@1.23.0"
                }
            },
            "npm:better-assert@1.0.2": {
                "map": {
                    "callsite": "npm:callsite@1.0.0"
                }
            },
            "npm:fstream@1.0.10": {
                "map": {
                    "graceful-fs": "npm:graceful-fs@4.1.5",
                    "inherits": "npm:inherits@2.0.1",
                    "mkdirp": "npm:mkdirp@0.5.1",
                    "rimraf": "npm:rimraf@2.5.4"
                }
            },
            "npm:block-stream@0.0.9": {
                "map": {
                    "inherits": "npm:inherits@2.0.1"
                }
            },
            "npm:expand-range@1.8.2": {
                "map": {
                    "fill-range": "npm:fill-range@2.2.3"
                }
            },
            "npm:nopt@3.0.6": {
                "map": {
                    "abbrev": "npm:abbrev@1.0.9"
                }
            },
            "npm:fill-range@2.2.3": {
                "map": {
                    "repeat-element": "npm:repeat-element@1.1.2",
                    "isobject": "npm:isobject@2.1.0",
                    "randomatic": "npm:randomatic@1.1.5",
                    "repeat-string": "npm:repeat-string@1.5.4",
                    "is-number": "npm:is-number@2.1.0"
                }
            },
            "npm:arr-diff@2.0.0": {
                "map": {
                    "arr-flatten": "npm:arr-flatten@1.0.1"
                }
            },
            "npm:inflight@1.0.5": {
                "map": {
                    "once": "npm:once@1.3.3",
                    "wrappy": "npm:wrappy@1.0.2"
                }
            },
            "npm:once@1.3.3": {
                "map": {
                    "wrappy": "npm:wrappy@1.0.2"
                }
            },
            "npm:isobject@2.1.0": {
                "map": {
                    "isarray": "npm:isarray@1.0.0"
                }
            },
            "npm:randomatic@1.1.5": {
                "map": {
                    "kind-of": "npm:kind-of@3.0.4",
                    "is-number": "npm:is-number@2.1.0"
                }
            },
            "npm:is-number@2.1.0": {
                "map": {
                    "kind-of": "npm:kind-of@3.0.4"
                }
            },
            "npm:for-own@0.1.4": {
                "map": {
                    "for-in": "npm:for-in@0.1.5"
                }
            },
            "npm:tar-pack@3.1.4": {
                "map": {
                    "debug": "npm:debug@2.2.0",
                    "readable-stream": "npm:readable-stream@2.1.4",
                    "fstream": "npm:fstream@1.0.10",
                    "once": "npm:once@1.3.3",
                    "rimraf": "npm:rimraf@2.5.4",
                    "tar": "npm:tar@2.2.1",
                    "uid-number": "npm:uid-number@0.0.6",
                    "fstream-ignore": "npm:fstream-ignore@1.0.5"
                }
            },
            "npm:npmlog@3.1.2": {
                "map": {
                    "set-blocking": "npm:set-blocking@2.0.0",
                    "console-control-strings": "npm:console-control-strings@1.1.0",
                    "are-we-there-yet": "npm:are-we-there-yet@1.1.2",
                    "gauge": "npm:gauge@2.6.0"
                }
            },
            "npm:request@2.74.0": {
                "map": {
                    "mime-types": "npm:mime-types@2.1.11",
                    "aws-sign2": "npm:aws-sign2@0.6.0",
                    "forever-agent": "npm:forever-agent@0.6.1",
                    "caseless": "npm:caseless@0.11.0",
                    "extend": "npm:extend@3.0.0",
                    "is-typedarray": "npm:is-typedarray@1.0.0",
                    "combined-stream": "npm:combined-stream@1.0.5",
                    "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
                    "isstream": "npm:isstream@0.1.2",
                    "stringstream": "npm:stringstream@0.0.5",
                    "tunnel-agent": "npm:tunnel-agent@0.4.3",
                    "http-signature": "npm:http-signature@1.1.1",
                    "oauth-sign": "npm:oauth-sign@0.8.2",
                    "form-data": "npm:form-data@1.0.0-rc4",
                    "bl": "npm:bl@1.1.2",
                    "har-validator": "npm:har-validator@2.0.6",
                    "node-uuid": "npm:node-uuid@1.4.7",
                    "aws4": "npm:aws4@1.4.1",
                    "qs": "npm:qs@6.2.1",
                    "tough-cookie": "npm:tough-cookie@2.3.1",
                    "hawk": "npm:hawk@3.1.3"
                }
            },
            "npm:fstream-ignore@1.0.5": {
                "map": {
                    "inherits": "npm:inherits@2.0.1",
                    "minimatch": "npm:minimatch@3.0.3",
                    "fstream": "npm:fstream@1.0.10"
                }
            },
            "npm:are-we-there-yet@1.1.2": {
                "map": {
                    "readable-stream": "npm:readable-stream@1.1.14",
                    "delegates": "npm:delegates@1.0.0"
                }
            },
            "npm:gauge@2.6.0": {
                "map": {
                    "console-control-strings": "npm:console-control-strings@1.1.0",
                    "has-color": "npm:has-color@0.1.7",
                    "has-unicode": "npm:has-unicode@2.0.1",
                    "aproba": "npm:aproba@1.0.4",
                    "string-width": "npm:string-width@1.0.2",
                    "wide-align": "npm:wide-align@1.1.0",
                    "strip-ansi": "npm:strip-ansi@3.0.1",
                    "signal-exit": "npm:signal-exit@3.0.0",
                    "object-assign": "npm:object-assign@4.1.0"
                }
            },
            "npm:readable-stream@1.1.14": {
                "map": {
                    "core-util-is": "npm:core-util-is@1.0.2",
                    "inherits": "npm:inherits@2.0.1",
                    "isarray": "npm:isarray@0.0.1",
                    "string_decoder": "npm:string_decoder@0.10.31",
                    "stream-browserify": "npm:stream-browserify@1.0.0"
                }
            },
            "npm:form-data@1.0.0-rc4": {
                "map": {
                    "mime-types": "npm:mime-types@2.1.11",
                    "combined-stream": "npm:combined-stream@1.0.5",
                    "async": "npm:async@1.5.2"
                }
            },
            "npm:bl@1.1.2": {
                "map": {
                    "readable-stream": "npm:readable-stream@2.0.6"
                }
            },
            "npm:har-validator@2.0.6": {
                "map": {
                    "commander": "npm:commander@2.9.0",
                    "pinkie-promise": "npm:pinkie-promise@2.0.1",
                    "chalk": "npm:chalk@1.1.3",
                    "is-my-json-valid": "npm:is-my-json-valid@2.13.1"
                }
            },
            "npm:stream-browserify@1.0.0": {
                "map": {
                    "inherits": "npm:inherits@2.0.1",
                    "readable-stream": "npm:readable-stream@1.1.14"
                }
            },
            "npm:readable-stream@2.0.6": {
                "map": {
                    "core-util-is": "npm:core-util-is@1.0.2",
                    "inherits": "npm:inherits@2.0.1",
                    "process-nextick-args": "npm:process-nextick-args@1.0.7",
                    "string_decoder": "npm:string_decoder@0.10.31",
                    "util-deprecate": "npm:util-deprecate@1.0.2",
                    "isarray": "npm:isarray@1.0.0"
                }
            },
            "npm:string-width@1.0.2": {
                "map": {
                    "strip-ansi": "npm:strip-ansi@3.0.1",
                    "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
                    "code-point-at": "npm:code-point-at@1.0.0"
                }
            },
            "npm:wide-align@1.1.0": {
                "map": {
                    "string-width": "npm:string-width@1.0.2"
                }
            },
            "npm:combined-stream@1.0.5": {
                "map": {
                    "delayed-stream": "npm:delayed-stream@1.0.0"
                }
            },
            "npm:http-signature@1.1.1": {
                "map": {
                    "assert-plus": "npm:assert-plus@0.2.0",
                    "jsprim": "npm:jsprim@1.3.0",
                    "sshpk": "npm:sshpk@1.9.2"
                }
            },
            "npm:chalk@1.1.3": {
                "map": {
                    "strip-ansi": "npm:strip-ansi@3.0.1",
                    "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
                    "ansi-styles": "npm:ansi-styles@2.2.1",
                    "has-ansi": "npm:has-ansi@2.0.0",
                    "supports-color": "npm:supports-color@2.0.0"
                }
            },
            "npm:sshpk@1.9.2": {
                "map": {
                    "assert-plus": "npm:assert-plus@1.0.0",
                    "getpass": "npm:getpass@0.1.6",
                    "asn1": "npm:asn1@0.2.3",
                    "dashdash": "npm:dashdash@1.14.0"
                }
            },
            "npm:strip-ansi@3.0.1": {
                "map": {
                    "ansi-regex": "npm:ansi-regex@2.0.0"
                }
            },
            "npm:hawk@3.1.3": {
                "map": {
                    "cryptiles": "npm:cryptiles@2.0.5",
                    "sntp": "npm:sntp@1.0.9",
                    "boom": "npm:boom@2.10.1",
                    "hoek": "npm:hoek@2.16.3"
                }
            },
            "npm:cryptiles@2.0.5": {
                "map": {
                    "boom": "npm:boom@2.10.1"
                }
            },
            "npm:sntp@1.0.9": {
                "map": {
                    "hoek": "npm:hoek@2.16.3"
                }
            },
            "npm:is-my-json-valid@2.13.1": {
                "map": {
                    "generate-function": "npm:generate-function@2.0.0",
                    "jsonpointer": "npm:jsonpointer@2.0.0",
                    "generate-object-property": "npm:generate-object-property@1.2.0",
                    "xtend": "npm:xtend@4.0.1"
                }
            },
            "npm:pinkie-promise@2.0.1": {
                "map": {
                    "pinkie": "npm:pinkie@2.0.4"
                }
            },
            "npm:jsprim@1.3.0": {
                "map": {
                    "json-schema": "npm:json-schema@0.2.2",
                    "extsprintf": "npm:extsprintf@1.0.2",
                    "verror": "npm:verror@1.3.6"
                }
            },
            "npm:boom@2.10.1": {
                "map": {
                    "hoek": "npm:hoek@2.16.3"
                }
            },
            "npm:has-ansi@2.0.0": {
                "map": {
                    "ansi-regex": "npm:ansi-regex@2.0.0"
                }
            },
            "npm:ecc-jsbn@0.1.1": {
                "map": {
                    "jsbn": "npm:jsbn@0.1.0"
                }
            },
            "npm:getpass@0.1.6": {
                "map": {
                    "assert-plus": "npm:assert-plus@1.0.0"
                }
            },
            "npm:jodid25519@1.0.2": {
                "map": {
                    "jsbn": "npm:jsbn@0.1.0"
                }
            },
            "npm:is-fullwidth-code-point@1.0.0": {
                "map": {
                    "number-is-nan": "npm:number-is-nan@1.0.0"
                }
            },
            "npm:code-point-at@1.0.0": {
                "map": {
                    "number-is-nan": "npm:number-is-nan@1.0.0"
                }
            },
            "npm:verror@1.3.6": {
                "map": {
                    "extsprintf": "npm:extsprintf@1.0.2"
                }
            },
            "npm:dashdash@1.14.0": {
                "map": {
                    "assert-plus": "npm:assert-plus@1.0.0"
                }
            },
            "npm:generate-object-property@1.2.0": {
                "map": {
                    "is-property": "npm:is-property@1.0.2"
                }
            },
            "github:jspm/nodelibs-http@0.2.0-alpha": {
                "map": {
                    "http-browserify": "npm:stream-http@2.3.1"
                }
            },
            "npm:stream-http@2.3.1": {
                "map": {
                    "readable-stream": "npm:readable-stream@2.1.4",
                    "xtend": "npm:xtend@4.0.1",
                    "inherits": "npm:inherits@2.0.1",
                    "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
                    "builtin-status-codes": "npm:builtin-status-codes@2.0.0"
                }
            },
            "github:jspm/nodelibs-url@0.2.0-alpha": {
                "map": {
                    "url-browserify": "npm:url@0.11.0"
                }
            },
            "npm:url@0.11.0": {
                "map": {
                    "punycode": "npm:punycode@1.3.2",
                    "querystring": "npm:querystring@0.2.0"
                }
            },
            "github:jspm/nodelibs-zlib@0.2.0-alpha": {
                "map": {
                    "zlib-browserify": "npm:browserify-zlib@0.1.4"
                }
            },
            "npm:browserify-zlib@0.1.4": {
                "map": {
                    "readable-stream": "npm:readable-stream@2.1.4",
                    "pako": "npm:pako@0.2.9"
                }
            },
            "github:jspm/nodelibs-punycode@0.2.0-alpha": {
                "map": {
                    "punycode-browserify": "npm:punycode@1.4.1"
                }
            },
            "npm:http-server@0.9.0": {
                "map": {
                    "colors": "npm:colors@1.0.3",
                    "opener": "npm:opener@1.4.1",
                    "corser": "npm:corser@2.0.1",
                    "portfinder": "npm:portfinder@0.4.0",
                    "optimist": "npm:optimist@0.6.1",
                    "union": "npm:union@0.4.4",
                    "ecstatic": "npm:ecstatic@1.4.1",
                    "http-proxy": "npm:http-proxy@1.14.0"
                }
            },
            "npm:optimist@0.6.1": {
                "map": {
                    "wordwrap": "npm:wordwrap@0.0.3",
                    "minimist": "npm:minimist@0.0.10"
                }
            },
            "npm:portfinder@0.4.0": {
                "map": {
                    "async": "npm:async@0.9.0",
                    "mkdirp": "npm:mkdirp@0.5.1"
                }
            },
            "npm:ecstatic@1.4.1": {
                "map": {
                    "minimist": "npm:minimist@1.2.0",
                    "url-join": "npm:url-join@1.1.0",
                    "mime": "npm:mime@1.3.4",
                    "he": "npm:he@0.5.0"
                }
            },
            "npm:union@0.4.4": {
                "map": {
                    "qs": "npm:qs@2.3.3"
                }
            },
            "npm:http-proxy@1.14.0": {
                "map": {
                    "requires-port": "npm:requires-port@1.0.0",
                    "eventemitter3": "npm:eventemitter3@1.2.0"
                }
            }
        }
    },
    transpiler: "ts",
    packages: {
        "app": {
            "defaultExtension": "ts",
            "main": "main",
            "meta": {
                "*.ts": {
                    "loader": "ts"
                },
                "*.css": {
                    "loader": "css"
                },
                "*.html": {
                    "loader": "text"
                }
            }
        }
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "@angular/forms": "npm:@angular/forms@0.3.0",
        "@angular/http": "npm:@angular/http@2.0.0-rc.5",
        "@angular/router-deprecated": "npm:@angular/router-deprecated@2.0.0-rc.2",
        "css": "github:systemjs/plugin-css@0.1.26",
        "@angular/common": "npm:@angular/common@2.0.0-rc.5",
        "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.5",
        "@angular/core": "npm:@angular/core@2.0.0-rc.5",
        "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.5",
        "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.5",
        "reflect-metadata": "npm:reflect-metadata@0.1.8",
        "rxjs": "npm:rxjs@5.0.0-beta.6",
        "text": "github:systemjs/plugin-text@0.0.8",
        "zone.js": "npm:zone.js@0.6.14",
        "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
        "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
        "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
        "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
        "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
        "events": "github:jspm/nodelibs-events@0.2.0-alpha",
        "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
        "os": "github:jspm/nodelibs-os@0.2.0-alpha",
        "path": "github:jspm/nodelibs-path@0.2.0-alpha",
        "process": "github:jspm/nodelibs-process@0.2.0-alpha",
        "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
        "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
        "util": "github:jspm/nodelibs-util@0.2.0-alpha",
        "vm": "github:jspm/nodelibs-vm@0.2.0-alpha"
    },
    packages: {
        "github:jspm/nodelibs-os@0.2.0-alpha": {
            "map": {
                "os-browserify": "npm:os-browserify@0.2.1"
            }
        },
        "github:jspm/nodelibs-crypto@0.2.0-alpha": {
            "map": {
                "crypto-browserify": "npm:crypto-browserify@3.11.0"
            }
        },
        "npm:crypto-browserify@3.11.0": {
            "map": {
                "browserify-cipher": "npm:browserify-cipher@1.0.0",
                "create-ecdh": "npm:create-ecdh@4.0.0",
                "create-hash": "npm:create-hash@1.1.2",
                "browserify-sign": "npm:browserify-sign@4.0.0",
                "inherits": "npm:inherits@2.0.1",
                "diffie-hellman": "npm:diffie-hellman@5.0.2",
                "create-hmac": "npm:create-hmac@1.1.4",
                "public-encrypt": "npm:public-encrypt@4.0.0",
                "randombytes": "npm:randombytes@2.0.3",
                "pbkdf2": "npm:pbkdf2@3.0.4"
            }
        },
        "npm:browserify-sign@4.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2",
                "create-hmac": "npm:create-hmac@1.1.4",
                "inherits": "npm:inherits@2.0.1",
                "bn.js": "npm:bn.js@4.11.6",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "parse-asn1": "npm:parse-asn1@5.0.0",
                "elliptic": "npm:elliptic@6.3.1"
            }
        },
        "npm:create-hash@1.1.2": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "cipher-base": "npm:cipher-base@1.0.2",
                "sha.js": "npm:sha.js@2.4.5",
                "ripemd160": "npm:ripemd160@1.0.1"
            }
        },
        "npm:diffie-hellman@5.0.2": {
            "map": {
                "randombytes": "npm:randombytes@2.0.3",
                "bn.js": "npm:bn.js@4.11.6",
                "miller-rabin": "npm:miller-rabin@4.0.0"
            }
        },
        "npm:create-hmac@1.1.4": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2",
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:public-encrypt@4.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2",
                "randombytes": "npm:randombytes@2.0.3",
                "bn.js": "npm:bn.js@4.11.6",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "parse-asn1": "npm:parse-asn1@5.0.0"
            }
        },
        "npm:pbkdf2@3.0.4": {
            "map": {
                "create-hmac": "npm:create-hmac@1.1.4"
            }
        },
        "npm:browserify-cipher@1.0.0": {
            "map": {
                "browserify-des": "npm:browserify-des@1.0.0",
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
            }
        },
        "npm:create-ecdh@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "elliptic": "npm:elliptic@6.3.1"
            }
        },
        "npm:browserify-des@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "cipher-base": "npm:cipher-base@1.0.2",
                "des.js": "npm:des.js@1.0.0"
            }
        },
        "npm:evp_bytestokey@1.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2"
            }
        },
        "npm:browserify-aes@1.0.6": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2",
                "inherits": "npm:inherits@2.0.1",
                "cipher-base": "npm:cipher-base@1.0.2",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "buffer-xor": "npm:buffer-xor@1.0.3"
            }
        },
        "npm:elliptic@6.3.1": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "bn.js": "npm:bn.js@4.11.6",
                "hash.js": "npm:hash.js@1.0.3",
                "brorand": "npm:brorand@1.0.5"
            }
        },
        "npm:browserify-rsa@4.0.1": {
            "map": {
                "randombytes": "npm:randombytes@2.0.3",
                "bn.js": "npm:bn.js@4.11.6"
            }
        },
        "npm:parse-asn1@5.0.0": {
            "map": {
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "create-hash": "npm:create-hash@1.1.2",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "pbkdf2": "npm:pbkdf2@3.0.4",
                "asn1.js": "npm:asn1.js@4.8.0"
            }
        },
        "npm:cipher-base@1.0.2": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:sha.js@2.4.5": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:miller-rabin@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "brorand": "npm:brorand@1.0.5"
            }
        },
        "npm:des.js@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:hash.js@1.0.3": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:asn1.js@4.8.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.6",
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "github:jspm/nodelibs-buffer@0.2.0-alpha": {
            "map": {
                "buffer-browserify": "npm:buffer@4.9.0"
            }
        },
        "npm:buffer@4.9.0": {
            "map": {
                "ieee754": "npm:ieee754@1.1.6",
                "isarray": "npm:isarray@1.0.0",
                "base64-js": "npm:base64-js@1.1.2"
            }
        },
        "github:jspm/nodelibs-stream@0.2.0-alpha": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "readable-stream": "npm:readable-stream@2.1.4"
            }
        },
        "npm:readable-stream@2.1.4": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "isarray": "npm:isarray@1.0.0",
                "string_decoder": "npm:string_decoder@0.10.31",
                "process-nextick-args": "npm:process-nextick-args@1.0.7",
                "buffer-shims": "npm:buffer-shims@1.0.0",
                "util-deprecate": "npm:util-deprecate@1.0.2",
                "core-util-is": "npm:core-util-is@1.0.2"
            }
        },
        "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
            "map": {
                "string_decoder-browserify": "npm:string_decoder@0.10.31"
            }
        }
    }
});
