/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.sym = (function() {

    /**
     * Namespace sym.
     * @exports sym
     * @namespace
     */
    var sym = {};

    sym.enums = (function() {

        /**
         * Namespace enums.
         * @memberof sym
         * @namespace
         */
        var enums = {};

        /**
         * Service enum.
         * @name sym.enums.Service
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} SLACK=1 SLACK value
         * @property {number} OKTA=2 OKTA value
         * @property {number} AWS=3 AWS value
         * @property {number} CUSTOM=4 CUSTOM value
         */
        enums.Service = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "SLACK"] = 1;
            values[valuesById[2] = "OKTA"] = 2;
            values[valuesById[3] = "AWS"] = 3;
            values[valuesById[4] = "CUSTOM"] = 4;
            return values;
        })();

        return enums;
    })();

    sym.messages = (function() {

        /**
         * Namespace messages.
         * @memberof sym
         * @namespace
         */
        var messages = {};

        messages.Approval = (function() {

            /**
             * Properties of an Approval.
             * @memberof sym.messages
             * @interface IApproval
             * @property {string|null} [id] Approval id
             * @property {sym.models.ISchema|null} [schema] Approval schema
             * @property {sym.messages.Approval.ITarget|null} [target] Approval target
             * @property {sym.messages.Approval.IMeta|null} [meta] Approval meta
             */

            /**
             * Constructs a new Approval.
             * @memberof sym.messages
             * @classdesc Represents an Approval.
             * @implements IApproval
             * @constructor
             * @param {sym.messages.IApproval=} [properties] Properties to set
             */
            function Approval(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Approval id.
             * @member {string} id
             * @memberof sym.messages.Approval
             * @instance
             */
            Approval.prototype.id = "";

            /**
             * Approval schema.
             * @member {sym.models.ISchema|null|undefined} schema
             * @memberof sym.messages.Approval
             * @instance
             */
            Approval.prototype.schema = null;

            /**
             * Approval target.
             * @member {sym.messages.Approval.ITarget|null|undefined} target
             * @memberof sym.messages.Approval
             * @instance
             */
            Approval.prototype.target = null;

            /**
             * Approval meta.
             * @member {sym.messages.Approval.IMeta|null|undefined} meta
             * @memberof sym.messages.Approval
             * @instance
             */
            Approval.prototype.meta = null;

            /**
             * Creates a new Approval instance using the specified properties.
             * @function create
             * @memberof sym.messages.Approval
             * @static
             * @param {sym.messages.IApproval=} [properties] Properties to set
             * @returns {sym.messages.Approval} Approval instance
             */
            Approval.create = function create(properties) {
                return new Approval(properties);
            };

            /**
             * Encodes the specified Approval message. Does not implicitly {@link sym.messages.Approval.verify|verify} messages.
             * @function encode
             * @memberof sym.messages.Approval
             * @static
             * @param {sym.messages.IApproval} message Approval message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Approval.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.schema != null && Object.hasOwnProperty.call(message, "schema"))
                    $root.sym.models.Schema.encode(message.schema, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                    $root.sym.messages.Approval.Target.encode(message.target, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.meta != null && Object.hasOwnProperty.call(message, "meta"))
                    $root.sym.messages.Approval.Meta.encode(message.meta, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Approval message, length delimited. Does not implicitly {@link sym.messages.Approval.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.messages.Approval
             * @static
             * @param {sym.messages.IApproval} message Approval message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Approval.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Approval message from the specified reader or buffer.
             * @function decode
             * @memberof sym.messages.Approval
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.messages.Approval} Approval
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Approval.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.Approval();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.schema = $root.sym.models.Schema.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.target = $root.sym.messages.Approval.Target.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.meta = $root.sym.messages.Approval.Meta.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Approval message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.messages.Approval
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.messages.Approval} Approval
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Approval.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Approval message.
             * @function verify
             * @memberof sym.messages.Approval
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Approval.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.schema != null && message.hasOwnProperty("schema")) {
                    var error = $root.sym.models.Schema.verify(message.schema);
                    if (error)
                        return "schema." + error;
                }
                if (message.target != null && message.hasOwnProperty("target")) {
                    var error = $root.sym.messages.Approval.Target.verify(message.target);
                    if (error)
                        return "target." + error;
                }
                if (message.meta != null && message.hasOwnProperty("meta")) {
                    var error = $root.sym.messages.Approval.Meta.verify(message.meta);
                    if (error)
                        return "meta." + error;
                }
                return null;
            };

            /**
             * Creates an Approval message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.messages.Approval
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.messages.Approval} Approval
             */
            Approval.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.messages.Approval)
                    return object;
                var message = new $root.sym.messages.Approval();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.schema != null) {
                    if (typeof object.schema !== "object")
                        throw TypeError(".sym.messages.Approval.schema: object expected");
                    message.schema = $root.sym.models.Schema.fromObject(object.schema);
                }
                if (object.target != null) {
                    if (typeof object.target !== "object")
                        throw TypeError(".sym.messages.Approval.target: object expected");
                    message.target = $root.sym.messages.Approval.Target.fromObject(object.target);
                }
                if (object.meta != null) {
                    if (typeof object.meta !== "object")
                        throw TypeError(".sym.messages.Approval.meta: object expected");
                    message.meta = $root.sym.messages.Approval.Meta.fromObject(object.meta);
                }
                return message;
            };

            /**
             * Creates a plain object from an Approval message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.messages.Approval
             * @static
             * @param {sym.messages.Approval} message Approval
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Approval.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.schema = null;
                    object.target = null;
                    object.meta = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.schema != null && message.hasOwnProperty("schema"))
                    object.schema = $root.sym.models.Schema.toObject(message.schema, options);
                if (message.target != null && message.hasOwnProperty("target"))
                    object.target = $root.sym.messages.Approval.Target.toObject(message.target, options);
                if (message.meta != null && message.hasOwnProperty("meta"))
                    object.meta = $root.sym.messages.Approval.Meta.toObject(message.meta, options);
                return object;
            };

            /**
             * Converts this Approval to JSON.
             * @function toJSON
             * @memberof sym.messages.Approval
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Approval.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Approval.Meta = (function() {

                /**
                 * Properties of a Meta.
                 * @memberof sym.messages.Approval
                 * @interface IMeta
                 * @property {sym.models.IUser|null} [approver] Meta approver
                 * @property {string|null} [reason] Meta reason
                 */

                /**
                 * Constructs a new Meta.
                 * @memberof sym.messages.Approval
                 * @classdesc Represents a Meta.
                 * @implements IMeta
                 * @constructor
                 * @param {sym.messages.Approval.IMeta=} [properties] Properties to set
                 */
                function Meta(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Meta approver.
                 * @member {sym.models.IUser|null|undefined} approver
                 * @memberof sym.messages.Approval.Meta
                 * @instance
                 */
                Meta.prototype.approver = null;

                /**
                 * Meta reason.
                 * @member {string} reason
                 * @memberof sym.messages.Approval.Meta
                 * @instance
                 */
                Meta.prototype.reason = "";

                /**
                 * Creates a new Meta instance using the specified properties.
                 * @function create
                 * @memberof sym.messages.Approval.Meta
                 * @static
                 * @param {sym.messages.Approval.IMeta=} [properties] Properties to set
                 * @returns {sym.messages.Approval.Meta} Meta instance
                 */
                Meta.create = function create(properties) {
                    return new Meta(properties);
                };

                /**
                 * Encodes the specified Meta message. Does not implicitly {@link sym.messages.Approval.Meta.verify|verify} messages.
                 * @function encode
                 * @memberof sym.messages.Approval.Meta
                 * @static
                 * @param {sym.messages.Approval.IMeta} message Meta message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Meta.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.approver != null && Object.hasOwnProperty.call(message, "approver"))
                        $root.sym.models.User.encode(message.approver, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
                    return writer;
                };

                /**
                 * Encodes the specified Meta message, length delimited. Does not implicitly {@link sym.messages.Approval.Meta.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sym.messages.Approval.Meta
                 * @static
                 * @param {sym.messages.Approval.IMeta} message Meta message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Meta.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Meta message from the specified reader or buffer.
                 * @function decode
                 * @memberof sym.messages.Approval.Meta
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sym.messages.Approval.Meta} Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Meta.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.Approval.Meta();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.approver = $root.sym.models.User.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.reason = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Meta message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sym.messages.Approval.Meta
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sym.messages.Approval.Meta} Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Meta.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Meta message.
                 * @function verify
                 * @memberof sym.messages.Approval.Meta
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Meta.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.approver != null && message.hasOwnProperty("approver")) {
                        var error = $root.sym.models.User.verify(message.approver);
                        if (error)
                            return "approver." + error;
                    }
                    if (message.reason != null && message.hasOwnProperty("reason"))
                        if (!$util.isString(message.reason))
                            return "reason: string expected";
                    return null;
                };

                /**
                 * Creates a Meta message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sym.messages.Approval.Meta
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sym.messages.Approval.Meta} Meta
                 */
                Meta.fromObject = function fromObject(object) {
                    if (object instanceof $root.sym.messages.Approval.Meta)
                        return object;
                    var message = new $root.sym.messages.Approval.Meta();
                    if (object.approver != null) {
                        if (typeof object.approver !== "object")
                            throw TypeError(".sym.messages.Approval.Meta.approver: object expected");
                        message.approver = $root.sym.models.User.fromObject(object.approver);
                    }
                    if (object.reason != null)
                        message.reason = String(object.reason);
                    return message;
                };

                /**
                 * Creates a plain object from a Meta message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sym.messages.Approval.Meta
                 * @static
                 * @param {sym.messages.Approval.Meta} message Meta
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Meta.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.approver = null;
                        object.reason = "";
                    }
                    if (message.approver != null && message.hasOwnProperty("approver"))
                        object.approver = $root.sym.models.User.toObject(message.approver, options);
                    if (message.reason != null && message.hasOwnProperty("reason"))
                        object.reason = message.reason;
                    return object;
                };

                /**
                 * Converts this Meta to JSON.
                 * @function toJSON
                 * @memberof sym.messages.Approval.Meta
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Meta.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Meta;
            })();

            Approval.Target = (function() {

                /**
                 * Properties of a Target.
                 * @memberof sym.messages.Approval
                 * @interface ITarget
                 * @property {sym.models.IUser|null} [user] Target user
                 * @property {sym.models.IResource|null} [resource] Target resource
                 */

                /**
                 * Constructs a new Target.
                 * @memberof sym.messages.Approval
                 * @classdesc Represents a Target.
                 * @implements ITarget
                 * @constructor
                 * @param {sym.messages.Approval.ITarget=} [properties] Properties to set
                 */
                function Target(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Target user.
                 * @member {sym.models.IUser|null|undefined} user
                 * @memberof sym.messages.Approval.Target
                 * @instance
                 */
                Target.prototype.user = null;

                /**
                 * Target resource.
                 * @member {sym.models.IResource|null|undefined} resource
                 * @memberof sym.messages.Approval.Target
                 * @instance
                 */
                Target.prototype.resource = null;

                /**
                 * Creates a new Target instance using the specified properties.
                 * @function create
                 * @memberof sym.messages.Approval.Target
                 * @static
                 * @param {sym.messages.Approval.ITarget=} [properties] Properties to set
                 * @returns {sym.messages.Approval.Target} Target instance
                 */
                Target.create = function create(properties) {
                    return new Target(properties);
                };

                /**
                 * Encodes the specified Target message. Does not implicitly {@link sym.messages.Approval.Target.verify|verify} messages.
                 * @function encode
                 * @memberof sym.messages.Approval.Target
                 * @static
                 * @param {sym.messages.Approval.ITarget} message Target message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Target.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                        $root.sym.models.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.resource != null && Object.hasOwnProperty.call(message, "resource"))
                        $root.sym.models.Resource.encode(message.resource, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Target message, length delimited. Does not implicitly {@link sym.messages.Approval.Target.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sym.messages.Approval.Target
                 * @static
                 * @param {sym.messages.Approval.ITarget} message Target message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Target.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Target message from the specified reader or buffer.
                 * @function decode
                 * @memberof sym.messages.Approval.Target
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sym.messages.Approval.Target} Target
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Target.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.Approval.Target();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.user = $root.sym.models.User.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.resource = $root.sym.models.Resource.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Target message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sym.messages.Approval.Target
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sym.messages.Approval.Target} Target
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Target.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Target message.
                 * @function verify
                 * @memberof sym.messages.Approval.Target
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Target.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.user != null && message.hasOwnProperty("user")) {
                        var error = $root.sym.models.User.verify(message.user);
                        if (error)
                            return "user." + error;
                    }
                    if (message.resource != null && message.hasOwnProperty("resource")) {
                        var error = $root.sym.models.Resource.verify(message.resource);
                        if (error)
                            return "resource." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Target message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sym.messages.Approval.Target
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sym.messages.Approval.Target} Target
                 */
                Target.fromObject = function fromObject(object) {
                    if (object instanceof $root.sym.messages.Approval.Target)
                        return object;
                    var message = new $root.sym.messages.Approval.Target();
                    if (object.user != null) {
                        if (typeof object.user !== "object")
                            throw TypeError(".sym.messages.Approval.Target.user: object expected");
                        message.user = $root.sym.models.User.fromObject(object.user);
                    }
                    if (object.resource != null) {
                        if (typeof object.resource !== "object")
                            throw TypeError(".sym.messages.Approval.Target.resource: object expected");
                        message.resource = $root.sym.models.Resource.fromObject(object.resource);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Target message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sym.messages.Approval.Target
                 * @static
                 * @param {sym.messages.Approval.Target} message Target
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Target.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.user = null;
                        object.resource = null;
                    }
                    if (message.user != null && message.hasOwnProperty("user"))
                        object.user = $root.sym.models.User.toObject(message.user, options);
                    if (message.resource != null && message.hasOwnProperty("resource"))
                        object.resource = $root.sym.models.Resource.toObject(message.resource, options);
                    return object;
                };

                /**
                 * Converts this Target to JSON.
                 * @function toJSON
                 * @memberof sym.messages.Approval.Target
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Target.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Target;
            })();

            return Approval;
        })();

        messages.EscalationResponse = (function() {

            /**
             * Properties of an EscalationResponse.
             * @memberof sym.messages
             * @interface IEscalationResponse
             * @property {boolean|null} [ok] EscalationResponse ok
             * @property {string|null} [error] EscalationResponse error
             */

            /**
             * Constructs a new EscalationResponse.
             * @memberof sym.messages
             * @classdesc Represents an EscalationResponse.
             * @implements IEscalationResponse
             * @constructor
             * @param {sym.messages.IEscalationResponse=} [properties] Properties to set
             */
            function EscalationResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EscalationResponse ok.
             * @member {boolean} ok
             * @memberof sym.messages.EscalationResponse
             * @instance
             */
            EscalationResponse.prototype.ok = false;

            /**
             * EscalationResponse error.
             * @member {string} error
             * @memberof sym.messages.EscalationResponse
             * @instance
             */
            EscalationResponse.prototype.error = "";

            /**
             * Creates a new EscalationResponse instance using the specified properties.
             * @function create
             * @memberof sym.messages.EscalationResponse
             * @static
             * @param {sym.messages.IEscalationResponse=} [properties] Properties to set
             * @returns {sym.messages.EscalationResponse} EscalationResponse instance
             */
            EscalationResponse.create = function create(properties) {
                return new EscalationResponse(properties);
            };

            /**
             * Encodes the specified EscalationResponse message. Does not implicitly {@link sym.messages.EscalationResponse.verify|verify} messages.
             * @function encode
             * @memberof sym.messages.EscalationResponse
             * @static
             * @param {sym.messages.IEscalationResponse} message EscalationResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EscalationResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
                return writer;
            };

            /**
             * Encodes the specified EscalationResponse message, length delimited. Does not implicitly {@link sym.messages.EscalationResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.messages.EscalationResponse
             * @static
             * @param {sym.messages.IEscalationResponse} message EscalationResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EscalationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EscalationResponse message from the specified reader or buffer.
             * @function decode
             * @memberof sym.messages.EscalationResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.messages.EscalationResponse} EscalationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EscalationResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.EscalationResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ok = reader.bool();
                        break;
                    case 2:
                        message.error = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EscalationResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.messages.EscalationResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.messages.EscalationResponse} EscalationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EscalationResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EscalationResponse message.
             * @function verify
             * @memberof sym.messages.EscalationResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EscalationResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ok != null && message.hasOwnProperty("ok"))
                    if (typeof message.ok !== "boolean")
                        return "ok: boolean expected";
                if (message.error != null && message.hasOwnProperty("error"))
                    if (!$util.isString(message.error))
                        return "error: string expected";
                return null;
            };

            /**
             * Creates an EscalationResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.messages.EscalationResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.messages.EscalationResponse} EscalationResponse
             */
            EscalationResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.messages.EscalationResponse)
                    return object;
                var message = new $root.sym.messages.EscalationResponse();
                if (object.ok != null)
                    message.ok = Boolean(object.ok);
                if (object.error != null)
                    message.error = String(object.error);
                return message;
            };

            /**
             * Creates a plain object from an EscalationResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.messages.EscalationResponse
             * @static
             * @param {sym.messages.EscalationResponse} message EscalationResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EscalationResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ok = false;
                    object.error = "";
                }
                if (message.ok != null && message.hasOwnProperty("ok"))
                    object.ok = message.ok;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = message.error;
                return object;
            };

            /**
             * Converts this EscalationResponse to JSON.
             * @function toJSON
             * @memberof sym.messages.EscalationResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EscalationResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EscalationResponse;
        })();

        messages.ExpirationResponse = (function() {

            /**
             * Properties of an ExpirationResponse.
             * @memberof sym.messages
             * @interface IExpirationResponse
             * @property {boolean|null} [ok] ExpirationResponse ok
             * @property {string|null} [error] ExpirationResponse error
             */

            /**
             * Constructs a new ExpirationResponse.
             * @memberof sym.messages
             * @classdesc Represents an ExpirationResponse.
             * @implements IExpirationResponse
             * @constructor
             * @param {sym.messages.IExpirationResponse=} [properties] Properties to set
             */
            function ExpirationResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExpirationResponse ok.
             * @member {boolean} ok
             * @memberof sym.messages.ExpirationResponse
             * @instance
             */
            ExpirationResponse.prototype.ok = false;

            /**
             * ExpirationResponse error.
             * @member {string} error
             * @memberof sym.messages.ExpirationResponse
             * @instance
             */
            ExpirationResponse.prototype.error = "";

            /**
             * Creates a new ExpirationResponse instance using the specified properties.
             * @function create
             * @memberof sym.messages.ExpirationResponse
             * @static
             * @param {sym.messages.IExpirationResponse=} [properties] Properties to set
             * @returns {sym.messages.ExpirationResponse} ExpirationResponse instance
             */
            ExpirationResponse.create = function create(properties) {
                return new ExpirationResponse(properties);
            };

            /**
             * Encodes the specified ExpirationResponse message. Does not implicitly {@link sym.messages.ExpirationResponse.verify|verify} messages.
             * @function encode
             * @memberof sym.messages.ExpirationResponse
             * @static
             * @param {sym.messages.IExpirationResponse} message ExpirationResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExpirationResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
                return writer;
            };

            /**
             * Encodes the specified ExpirationResponse message, length delimited. Does not implicitly {@link sym.messages.ExpirationResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.messages.ExpirationResponse
             * @static
             * @param {sym.messages.IExpirationResponse} message ExpirationResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExpirationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ExpirationResponse message from the specified reader or buffer.
             * @function decode
             * @memberof sym.messages.ExpirationResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.messages.ExpirationResponse} ExpirationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExpirationResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.messages.ExpirationResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ok = reader.bool();
                        break;
                    case 2:
                        message.error = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ExpirationResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.messages.ExpirationResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.messages.ExpirationResponse} ExpirationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExpirationResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ExpirationResponse message.
             * @function verify
             * @memberof sym.messages.ExpirationResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExpirationResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ok != null && message.hasOwnProperty("ok"))
                    if (typeof message.ok !== "boolean")
                        return "ok: boolean expected";
                if (message.error != null && message.hasOwnProperty("error"))
                    if (!$util.isString(message.error))
                        return "error: string expected";
                return null;
            };

            /**
             * Creates an ExpirationResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.messages.ExpirationResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.messages.ExpirationResponse} ExpirationResponse
             */
            ExpirationResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.messages.ExpirationResponse)
                    return object;
                var message = new $root.sym.messages.ExpirationResponse();
                if (object.ok != null)
                    message.ok = Boolean(object.ok);
                if (object.error != null)
                    message.error = String(object.error);
                return message;
            };

            /**
             * Creates a plain object from an ExpirationResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.messages.ExpirationResponse
             * @static
             * @param {sym.messages.ExpirationResponse} message ExpirationResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExpirationResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ok = false;
                    object.error = "";
                }
                if (message.ok != null && message.hasOwnProperty("ok"))
                    object.ok = message.ok;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = message.error;
                return object;
            };

            /**
             * Converts this ExpirationResponse to JSON.
             * @function toJSON
             * @memberof sym.messages.ExpirationResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExpirationResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ExpirationResponse;
        })();

        return messages;
    })();

    sym.models = (function() {

        /**
         * Namespace models.
         * @memberof sym
         * @namespace
         */
        var models = {};

        models.Resource = (function() {

            /**
             * Properties of a Resource.
             * @memberof sym.models
             * @interface IResource
             * @property {sym.enums.Service|null} [service] Resource service
             * @property {string|null} [id] Resource id
             */

            /**
             * Constructs a new Resource.
             * @memberof sym.models
             * @classdesc Represents a Resource.
             * @implements IResource
             * @constructor
             * @param {sym.models.IResource=} [properties] Properties to set
             */
            function Resource(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Resource service.
             * @member {sym.enums.Service} service
             * @memberof sym.models.Resource
             * @instance
             */
            Resource.prototype.service = 0;

            /**
             * Resource id.
             * @member {string} id
             * @memberof sym.models.Resource
             * @instance
             */
            Resource.prototype.id = "";

            /**
             * Creates a new Resource instance using the specified properties.
             * @function create
             * @memberof sym.models.Resource
             * @static
             * @param {sym.models.IResource=} [properties] Properties to set
             * @returns {sym.models.Resource} Resource instance
             */
            Resource.create = function create(properties) {
                return new Resource(properties);
            };

            /**
             * Encodes the specified Resource message. Does not implicitly {@link sym.models.Resource.verify|verify} messages.
             * @function encode
             * @memberof sym.models.Resource
             * @static
             * @param {sym.models.IResource} message Resource message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Resource.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.service != null && Object.hasOwnProperty.call(message, "service"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.service);
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
                return writer;
            };

            /**
             * Encodes the specified Resource message, length delimited. Does not implicitly {@link sym.models.Resource.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.models.Resource
             * @static
             * @param {sym.models.IResource} message Resource message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Resource.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Resource message from the specified reader or buffer.
             * @function decode
             * @memberof sym.models.Resource
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.models.Resource} Resource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Resource.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.models.Resource();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.service = reader.int32();
                        break;
                    case 2:
                        message.id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Resource message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.models.Resource
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.models.Resource} Resource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Resource.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Resource message.
             * @function verify
             * @memberof sym.models.Resource
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Resource.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.service != null && message.hasOwnProperty("service"))
                    switch (message.service) {
                    default:
                        return "service: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                return null;
            };

            /**
             * Creates a Resource message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.models.Resource
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.models.Resource} Resource
             */
            Resource.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.models.Resource)
                    return object;
                var message = new $root.sym.models.Resource();
                switch (object.service) {
                case "UNKNOWN":
                case 0:
                    message.service = 0;
                    break;
                case "SLACK":
                case 1:
                    message.service = 1;
                    break;
                case "OKTA":
                case 2:
                    message.service = 2;
                    break;
                case "AWS":
                case 3:
                    message.service = 3;
                    break;
                case "CUSTOM":
                case 4:
                    message.service = 4;
                    break;
                }
                if (object.id != null)
                    message.id = String(object.id);
                return message;
            };

            /**
             * Creates a plain object from a Resource message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.models.Resource
             * @static
             * @param {sym.models.Resource} message Resource
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Resource.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.service = options.enums === String ? "UNKNOWN" : 0;
                    object.id = "";
                }
                if (message.service != null && message.hasOwnProperty("service"))
                    object.service = options.enums === String ? $root.sym.enums.Service[message.service] : message.service;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };

            /**
             * Converts this Resource to JSON.
             * @function toJSON
             * @memberof sym.models.Resource
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Resource.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Resource;
        })();

        models.Schema = (function() {

            /**
             * Properties of a Schema.
             * @memberof sym.models
             * @interface ISchema
             * @property {number|null} [version] Schema version
             */

            /**
             * Constructs a new Schema.
             * @memberof sym.models
             * @classdesc Represents a Schema.
             * @implements ISchema
             * @constructor
             * @param {sym.models.ISchema=} [properties] Properties to set
             */
            function Schema(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Schema version.
             * @member {number} version
             * @memberof sym.models.Schema
             * @instance
             */
            Schema.prototype.version = 0;

            /**
             * Creates a new Schema instance using the specified properties.
             * @function create
             * @memberof sym.models.Schema
             * @static
             * @param {sym.models.ISchema=} [properties] Properties to set
             * @returns {sym.models.Schema} Schema instance
             */
            Schema.create = function create(properties) {
                return new Schema(properties);
            };

            /**
             * Encodes the specified Schema message. Does not implicitly {@link sym.models.Schema.verify|verify} messages.
             * @function encode
             * @memberof sym.models.Schema
             * @static
             * @param {sym.models.ISchema} message Schema message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Schema.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
                return writer;
            };

            /**
             * Encodes the specified Schema message, length delimited. Does not implicitly {@link sym.models.Schema.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.models.Schema
             * @static
             * @param {sym.models.ISchema} message Schema message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Schema.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Schema message from the specified reader or buffer.
             * @function decode
             * @memberof sym.models.Schema
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.models.Schema} Schema
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Schema.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.models.Schema();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.version = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Schema message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.models.Schema
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.models.Schema} Schema
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Schema.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Schema message.
             * @function verify
             * @memberof sym.models.Schema
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Schema.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isInteger(message.version))
                        return "version: integer expected";
                return null;
            };

            /**
             * Creates a Schema message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.models.Schema
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.models.Schema} Schema
             */
            Schema.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.models.Schema)
                    return object;
                var message = new $root.sym.models.Schema();
                if (object.version != null)
                    message.version = object.version | 0;
                return message;
            };

            /**
             * Creates a plain object from a Schema message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.models.Schema
             * @static
             * @param {sym.models.Schema} message Schema
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Schema.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.version = 0;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                return object;
            };

            /**
             * Converts this Schema to JSON.
             * @function toJSON
             * @memberof sym.models.Schema
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Schema.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Schema;
        })();

        models.User = (function() {

            /**
             * Properties of a User.
             * @memberof sym.models
             * @interface IUser
             * @property {sym.models.IUUID|null} [uuid] User uuid
             * @property {sym.models.User.IIdentity|null} [currentIdentity] User currentIdentity
             * @property {Array.<sym.models.User.IIdentity>|null} [identities] User identities
             */

            /**
             * Constructs a new User.
             * @memberof sym.models
             * @classdesc Represents a User.
             * @implements IUser
             * @constructor
             * @param {sym.models.IUser=} [properties] Properties to set
             */
            function User(properties) {
                this.identities = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * User uuid.
             * @member {sym.models.IUUID|null|undefined} uuid
             * @memberof sym.models.User
             * @instance
             */
            User.prototype.uuid = null;

            /**
             * User currentIdentity.
             * @member {sym.models.User.IIdentity|null|undefined} currentIdentity
             * @memberof sym.models.User
             * @instance
             */
            User.prototype.currentIdentity = null;

            /**
             * User identities.
             * @member {Array.<sym.models.User.IIdentity>} identities
             * @memberof sym.models.User
             * @instance
             */
            User.prototype.identities = $util.emptyArray;

            /**
             * Creates a new User instance using the specified properties.
             * @function create
             * @memberof sym.models.User
             * @static
             * @param {sym.models.IUser=} [properties] Properties to set
             * @returns {sym.models.User} User instance
             */
            User.create = function create(properties) {
                return new User(properties);
            };

            /**
             * Encodes the specified User message. Does not implicitly {@link sym.models.User.verify|verify} messages.
             * @function encode
             * @memberof sym.models.User
             * @static
             * @param {sym.models.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    $root.sym.models.UUID.encode(message.uuid, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.currentIdentity != null && Object.hasOwnProperty.call(message, "currentIdentity"))
                    $root.sym.models.User.Identity.encode(message.currentIdentity, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.identities != null && message.identities.length)
                    for (var i = 0; i < message.identities.length; ++i)
                        $root.sym.models.User.Identity.encode(message.identities[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link sym.models.User.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.models.User
             * @static
             * @param {sym.models.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof sym.models.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.models.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.models.User();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uuid = $root.sym.models.UUID.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.currentIdentity = $root.sym.models.User.Identity.decode(reader, reader.uint32());
                        break;
                    case 3:
                        if (!(message.identities && message.identities.length))
                            message.identities = [];
                        message.identities.push($root.sym.models.User.Identity.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.models.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.models.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a User message.
             * @function verify
             * @memberof sym.models.User
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            User.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uuid != null && message.hasOwnProperty("uuid")) {
                    var error = $root.sym.models.UUID.verify(message.uuid);
                    if (error)
                        return "uuid." + error;
                }
                if (message.currentIdentity != null && message.hasOwnProperty("currentIdentity")) {
                    var error = $root.sym.models.User.Identity.verify(message.currentIdentity);
                    if (error)
                        return "currentIdentity." + error;
                }
                if (message.identities != null && message.hasOwnProperty("identities")) {
                    if (!Array.isArray(message.identities))
                        return "identities: array expected";
                    for (var i = 0; i < message.identities.length; ++i) {
                        var error = $root.sym.models.User.Identity.verify(message.identities[i]);
                        if (error)
                            return "identities." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.models.User
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.models.User} User
             */
            User.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.models.User)
                    return object;
                var message = new $root.sym.models.User();
                if (object.uuid != null) {
                    if (typeof object.uuid !== "object")
                        throw TypeError(".sym.models.User.uuid: object expected");
                    message.uuid = $root.sym.models.UUID.fromObject(object.uuid);
                }
                if (object.currentIdentity != null) {
                    if (typeof object.currentIdentity !== "object")
                        throw TypeError(".sym.models.User.currentIdentity: object expected");
                    message.currentIdentity = $root.sym.models.User.Identity.fromObject(object.currentIdentity);
                }
                if (object.identities) {
                    if (!Array.isArray(object.identities))
                        throw TypeError(".sym.models.User.identities: array expected");
                    message.identities = [];
                    for (var i = 0; i < object.identities.length; ++i) {
                        if (typeof object.identities[i] !== "object")
                            throw TypeError(".sym.models.User.identities: object expected");
                        message.identities[i] = $root.sym.models.User.Identity.fromObject(object.identities[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.models.User
             * @static
             * @param {sym.models.User} message User
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.identities = [];
                if (options.defaults) {
                    object.uuid = null;
                    object.currentIdentity = null;
                }
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = $root.sym.models.UUID.toObject(message.uuid, options);
                if (message.currentIdentity != null && message.hasOwnProperty("currentIdentity"))
                    object.currentIdentity = $root.sym.models.User.Identity.toObject(message.currentIdentity, options);
                if (message.identities && message.identities.length) {
                    object.identities = [];
                    for (var j = 0; j < message.identities.length; ++j)
                        object.identities[j] = $root.sym.models.User.Identity.toObject(message.identities[j], options);
                }
                return object;
            };

            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof sym.models.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            User.Identity = (function() {

                /**
                 * Properties of an Identity.
                 * @memberof sym.models.User
                 * @interface IIdentity
                 * @property {sym.enums.Service|null} [service] Identity service
                 * @property {string|null} [id] Identity id
                 */

                /**
                 * Constructs a new Identity.
                 * @memberof sym.models.User
                 * @classdesc Represents an Identity.
                 * @implements IIdentity
                 * @constructor
                 * @param {sym.models.User.IIdentity=} [properties] Properties to set
                 */
                function Identity(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Identity service.
                 * @member {sym.enums.Service} service
                 * @memberof sym.models.User.Identity
                 * @instance
                 */
                Identity.prototype.service = 0;

                /**
                 * Identity id.
                 * @member {string} id
                 * @memberof sym.models.User.Identity
                 * @instance
                 */
                Identity.prototype.id = "";

                /**
                 * Creates a new Identity instance using the specified properties.
                 * @function create
                 * @memberof sym.models.User.Identity
                 * @static
                 * @param {sym.models.User.IIdentity=} [properties] Properties to set
                 * @returns {sym.models.User.Identity} Identity instance
                 */
                Identity.create = function create(properties) {
                    return new Identity(properties);
                };

                /**
                 * Encodes the specified Identity message. Does not implicitly {@link sym.models.User.Identity.verify|verify} messages.
                 * @function encode
                 * @memberof sym.models.User.Identity
                 * @static
                 * @param {sym.models.User.IIdentity} message Identity message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Identity.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.service != null && Object.hasOwnProperty.call(message, "service"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.service);
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified Identity message, length delimited. Does not implicitly {@link sym.models.User.Identity.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sym.models.User.Identity
                 * @static
                 * @param {sym.models.User.IIdentity} message Identity message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Identity.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Identity message from the specified reader or buffer.
                 * @function decode
                 * @memberof sym.models.User.Identity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sym.models.User.Identity} Identity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Identity.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.models.User.Identity();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.service = reader.int32();
                            break;
                        case 2:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Identity message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sym.models.User.Identity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sym.models.User.Identity} Identity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Identity.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Identity message.
                 * @function verify
                 * @memberof sym.models.User.Identity
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Identity.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.service != null && message.hasOwnProperty("service"))
                        switch (message.service) {
                        default:
                            return "service: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            break;
                        }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates an Identity message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sym.models.User.Identity
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sym.models.User.Identity} Identity
                 */
                Identity.fromObject = function fromObject(object) {
                    if (object instanceof $root.sym.models.User.Identity)
                        return object;
                    var message = new $root.sym.models.User.Identity();
                    switch (object.service) {
                    case "UNKNOWN":
                    case 0:
                        message.service = 0;
                        break;
                    case "SLACK":
                    case 1:
                        message.service = 1;
                        break;
                    case "OKTA":
                    case 2:
                        message.service = 2;
                        break;
                    case "AWS":
                    case 3:
                        message.service = 3;
                        break;
                    case "CUSTOM":
                    case 4:
                        message.service = 4;
                        break;
                    }
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from an Identity message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sym.models.User.Identity
                 * @static
                 * @param {sym.models.User.Identity} message Identity
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Identity.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.service = options.enums === String ? "UNKNOWN" : 0;
                        object.id = "";
                    }
                    if (message.service != null && message.hasOwnProperty("service"))
                        object.service = options.enums === String ? $root.sym.enums.Service[message.service] : message.service;
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this Identity to JSON.
                 * @function toJSON
                 * @memberof sym.models.User.Identity
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Identity.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Identity;
            })();

            return User;
        })();

        models.UUID = (function() {

            /**
             * Properties of a UUID.
             * @memberof sym.models
             * @interface IUUID
             * @property {string|null} [value] UUID value
             */

            /**
             * Constructs a new UUID.
             * @memberof sym.models
             * @classdesc Represents a UUID.
             * @implements IUUID
             * @constructor
             * @param {sym.models.IUUID=} [properties] Properties to set
             */
            function UUID(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UUID value.
             * @member {string} value
             * @memberof sym.models.UUID
             * @instance
             */
            UUID.prototype.value = "";

            /**
             * Creates a new UUID instance using the specified properties.
             * @function create
             * @memberof sym.models.UUID
             * @static
             * @param {sym.models.IUUID=} [properties] Properties to set
             * @returns {sym.models.UUID} UUID instance
             */
            UUID.create = function create(properties) {
                return new UUID(properties);
            };

            /**
             * Encodes the specified UUID message. Does not implicitly {@link sym.models.UUID.verify|verify} messages.
             * @function encode
             * @memberof sym.models.UUID
             * @static
             * @param {sym.models.IUUID} message UUID message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UUID.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                return writer;
            };

            /**
             * Encodes the specified UUID message, length delimited. Does not implicitly {@link sym.models.UUID.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sym.models.UUID
             * @static
             * @param {sym.models.IUUID} message UUID message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UUID.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UUID message from the specified reader or buffer.
             * @function decode
             * @memberof sym.models.UUID
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sym.models.UUID} UUID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UUID.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sym.models.UUID();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UUID message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sym.models.UUID
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sym.models.UUID} UUID
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UUID.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UUID message.
             * @function verify
             * @memberof sym.models.UUID
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UUID.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            /**
             * Creates a UUID message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sym.models.UUID
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sym.models.UUID} UUID
             */
            UUID.fromObject = function fromObject(object) {
                if (object instanceof $root.sym.models.UUID)
                    return object;
                var message = new $root.sym.models.UUID();
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };

            /**
             * Creates a plain object from a UUID message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sym.models.UUID
             * @static
             * @param {sym.models.UUID} message UUID
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UUID.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = "";
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this UUID to JSON.
             * @function toJSON
             * @memberof sym.models.UUID
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UUID.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UUID;
        })();

        return models;
    })();

    return sym;
})();

module.exports = $root;
