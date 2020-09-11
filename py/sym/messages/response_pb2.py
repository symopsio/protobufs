# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: sym/messages/response.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='sym/messages/response.proto',
  package='sym.messages',
  syntax='proto3',
  serialized_options=b'Z%github.com/symopsio/types/go/messages',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x1bsym/messages/response.proto\x12\x0csym.messages\"-\n\x10\x41pprovalResponse\x12\n\n\x02ok\x18\x01 \x01(\x08\x12\r\n\x05\x65rror\x18\x02 \x01(\t\"/\n\x12\x45xpirationResponse\x12\n\n\x02ok\x18\x01 \x01(\x08\x12\r\n\x05\x65rror\x18\x02 \x01(\t\"-\n\x10\x44ispatchResponse\x12\n\n\x02ok\x18\x01 \x01(\x08\x12\r\n\x05\x65rror\x18\x02 \x01(\tB\'Z%github.com/symopsio/types/go/messagesb\x06proto3'
)




_APPROVALRESPONSE = _descriptor.Descriptor(
  name='ApprovalResponse',
  full_name='sym.messages.ApprovalResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='ok', full_name='sym.messages.ApprovalResponse.ok', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='error', full_name='sym.messages.ApprovalResponse.error', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=45,
  serialized_end=90,
)


_EXPIRATIONRESPONSE = _descriptor.Descriptor(
  name='ExpirationResponse',
  full_name='sym.messages.ExpirationResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='ok', full_name='sym.messages.ExpirationResponse.ok', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='error', full_name='sym.messages.ExpirationResponse.error', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=92,
  serialized_end=139,
)


_DISPATCHRESPONSE = _descriptor.Descriptor(
  name='DispatchResponse',
  full_name='sym.messages.DispatchResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='ok', full_name='sym.messages.DispatchResponse.ok', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='error', full_name='sym.messages.DispatchResponse.error', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=141,
  serialized_end=186,
)

DESCRIPTOR.message_types_by_name['ApprovalResponse'] = _APPROVALRESPONSE
DESCRIPTOR.message_types_by_name['ExpirationResponse'] = _EXPIRATIONRESPONSE
DESCRIPTOR.message_types_by_name['DispatchResponse'] = _DISPATCHRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ApprovalResponse = _reflection.GeneratedProtocolMessageType('ApprovalResponse', (_message.Message,), {
  'DESCRIPTOR' : _APPROVALRESPONSE,
  '__module__' : 'sym.messages.response_pb2'
  # @@protoc_insertion_point(class_scope:sym.messages.ApprovalResponse)
  })
_sym_db.RegisterMessage(ApprovalResponse)

ExpirationResponse = _reflection.GeneratedProtocolMessageType('ExpirationResponse', (_message.Message,), {
  'DESCRIPTOR' : _EXPIRATIONRESPONSE,
  '__module__' : 'sym.messages.response_pb2'
  # @@protoc_insertion_point(class_scope:sym.messages.ExpirationResponse)
  })
_sym_db.RegisterMessage(ExpirationResponse)

DispatchResponse = _reflection.GeneratedProtocolMessageType('DispatchResponse', (_message.Message,), {
  'DESCRIPTOR' : _DISPATCHRESPONSE,
  '__module__' : 'sym.messages.response_pb2'
  # @@protoc_insertion_point(class_scope:sym.messages.DispatchResponse)
  })
_sym_db.RegisterMessage(DispatchResponse)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
