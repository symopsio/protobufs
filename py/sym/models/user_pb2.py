# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: sym/models/user.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from sym.enums import service_pb2 as sym_dot_enums_dot_service__pb2
from sym.models import uuid_pb2 as sym_dot_models_dot_uuid__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='sym/models/user.proto',
  package='sym.models',
  syntax='proto3',
  serialized_options=b'Z#github.com/symopsio/types/go/models',
  serialized_pb=b'\n\x15sym/models/user.proto\x12\nsym.models\x1a\x17sym/enums/service.proto\x1a\x15sym/models/uuid.proto\"\xc7\x01\n\x04User\x12\x1e\n\x04uuid\x18\x01 \x01(\x0b\x32\x10.sym.models.UUID\x12\x33\n\x10\x63urrent_identity\x18\x02 \x01(\x0b\x32\x19.sym.models.User.Identity\x12-\n\nidentities\x18\x03 \x03(\x0b\x32\x19.sym.models.User.Identity\x1a;\n\x08Identity\x12#\n\x07service\x18\x01 \x01(\x0e\x32\x12.sym.enums.Service\x12\n\n\x02id\x18\x02 \x01(\tB%Z#github.com/symopsio/types/go/modelsb\x06proto3'
  ,
  dependencies=[sym_dot_enums_dot_service__pb2.DESCRIPTOR,sym_dot_models_dot_uuid__pb2.DESCRIPTOR,])




_USER_IDENTITY = _descriptor.Descriptor(
  name='Identity',
  full_name='sym.models.User.Identity',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='service', full_name='sym.models.User.Identity.service', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='id', full_name='sym.models.User.Identity.id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=226,
  serialized_end=285,
)

_USER = _descriptor.Descriptor(
  name='User',
  full_name='sym.models.User',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='uuid', full_name='sym.models.User.uuid', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='current_identity', full_name='sym.models.User.current_identity', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='identities', full_name='sym.models.User.identities', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_USER_IDENTITY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=86,
  serialized_end=285,
)

_USER_IDENTITY.fields_by_name['service'].enum_type = sym_dot_enums_dot_service__pb2._SERVICE
_USER_IDENTITY.containing_type = _USER
_USER.fields_by_name['uuid'].message_type = sym_dot_models_dot_uuid__pb2._UUID
_USER.fields_by_name['current_identity'].message_type = _USER_IDENTITY
_USER.fields_by_name['identities'].message_type = _USER_IDENTITY
DESCRIPTOR.message_types_by_name['User'] = _USER
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

User = _reflection.GeneratedProtocolMessageType('User', (_message.Message,), {

  'Identity' : _reflection.GeneratedProtocolMessageType('Identity', (_message.Message,), {
    'DESCRIPTOR' : _USER_IDENTITY,
    '__module__' : 'sym.models.user_pb2'
    # @@protoc_insertion_point(class_scope:sym.models.User.Identity)
    })
  ,
  'DESCRIPTOR' : _USER,
  '__module__' : 'sym.models.user_pb2'
  # @@protoc_insertion_point(class_scope:sym.models.User)
  })
_sym_db.RegisterMessage(User)
_sym_db.RegisterMessage(User.Identity)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
