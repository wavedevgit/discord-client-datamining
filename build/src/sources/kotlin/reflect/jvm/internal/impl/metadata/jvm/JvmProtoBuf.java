package kotlin.reflect.jvm.internal.impl.metadata.jvm;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite;
import kotlin.reflect.jvm.internal.impl.protobuf.AbstractParser;
import kotlin.reflect.jvm.internal.impl.protobuf.ByteString;
import kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream;
import kotlin.reflect.jvm.internal.impl.protobuf.CodedOutputStream;
import kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite;
import kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite;
import kotlin.reflect.jvm.internal.impl.protobuf.Internal;
import kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder;
import kotlin.reflect.jvm.internal.impl.protobuf.Parser;
import kotlin.reflect.jvm.internal.impl.protobuf.WireFormat;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JvmProtoBuf {
    public static final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Class, Integer> anonymousObjectOriginName;
    public static final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Class, List<ProtoBuf.Property>> classLocalVariable;
    public static final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Class, Integer> classModuleName;
    public static final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Constructor, JvmMethodSignature> constructorSignature;
    public static final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, Integer> flags;
    public static final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Type, Boolean> isRaw;
    public static final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Class, Integer> jvmClassFlags;
    public static final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Function, Integer> lambdaClassOriginName;
    public static final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Function, JvmMethodSignature> methodSignature;
    public static final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Package, List<ProtoBuf.Property>> packageLocalVariable;
    public static final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Package, Integer> packageModuleName;
    public static final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, JvmPropertySignature> propertySignature;
    public static final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Type, List<ProtoBuf.Annotation>> typeAnnotation;
    public static final GeneratedMessageLite.GeneratedExtension<ProtoBuf.TypeParameter, List<ProtoBuf.Annotation>> typeParameterAnnotation;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class JvmFieldSignature extends GeneratedMessageLite implements JvmFieldSignatureOrBuilder {
        public static Parser<JvmFieldSignature> PARSER = new a();

        /* renamed from: s  reason: collision with root package name */
        private static final JvmFieldSignature f33487s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33488e;

        /* renamed from: i  reason: collision with root package name */
        private int f33489i;

        /* renamed from: o  reason: collision with root package name */
        private int f33490o;

        /* renamed from: p  reason: collision with root package name */
        private int f33491p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33492q;

        /* renamed from: r  reason: collision with root package name */
        private int f33493r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<JvmFieldSignature, Builder> implements JvmFieldSignatureOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33494e;

            /* renamed from: i  reason: collision with root package name */
            private int f33495i;

            /* renamed from: o  reason: collision with root package name */
            private int f33496o;

            private Builder() {
                d();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
            }

            public JvmFieldSignature buildPartial() {
                JvmFieldSignature jvmFieldSignature = new JvmFieldSignature(this);
                int i10 = this.f33494e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                jvmFieldSignature.f33490o = this.f33495i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                jvmFieldSignature.f33491p = this.f33496o;
                jvmFieldSignature.f33489i = i11;
                return jvmFieldSignature;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            public Builder setDesc(int i10) {
                this.f33494e |= 2;
                this.f33496o = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f33494e |= 1;
                this.f33495i = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public JvmFieldSignature build() {
                JvmFieldSignature buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public JvmFieldSignature getDefaultInstanceForType() {
                return JvmFieldSignature.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(JvmFieldSignature jvmFieldSignature) {
                if (jvmFieldSignature == JvmFieldSignature.getDefaultInstance()) {
                    return this;
                }
                if (jvmFieldSignature.hasName()) {
                    setName(jvmFieldSignature.getName());
                }
                if (jvmFieldSignature.hasDesc()) {
                    setDesc(jvmFieldSignature.getDesc());
                }
                setUnknownFields(getUnknownFields().concat(jvmFieldSignature.f33488e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.JvmFieldSignature.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$JvmFieldSignature> r1 = kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.JvmFieldSignature.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$JvmFieldSignature r3 = (kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.JvmFieldSignature) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$JvmFieldSignature r4 = (kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.JvmFieldSignature) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.JvmFieldSignature.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$JvmFieldSignature$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public JvmFieldSignature parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new JvmFieldSignature(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            JvmFieldSignature jvmFieldSignature = new JvmFieldSignature(true);
            f33487s = jvmFieldSignature;
            jvmFieldSignature.l();
        }

        public static JvmFieldSignature getDefaultInstance() {
            return f33487s;
        }

        private void l() {
            this.f33490o = 0;
            this.f33491p = 0;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public int getDesc() {
            return this.f33491p;
        }

        public int getName() {
            return this.f33490o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<JvmFieldSignature> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33493r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33489i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33490o);
            } else {
                i10 = 0;
            }
            if ((this.f33489i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33491p);
            }
            int size = i10 + this.f33488e.size();
            this.f33493r = size;
            return size;
        }

        public boolean hasDesc() {
            if ((this.f33489i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f33489i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33492q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f33492q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33489i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33490o);
            }
            if ((this.f33489i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f33491p);
            }
            codedOutputStream.writeRawBytes(this.f33488e);
        }

        public static Builder newBuilder(JvmFieldSignature jvmFieldSignature) {
            return newBuilder().mergeFrom(jvmFieldSignature);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public JvmFieldSignature getDefaultInstanceForType() {
            return f33487s;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private JvmFieldSignature(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f33492q = (byte) -1;
            this.f33493r = -1;
            this.f33488e = builder.getUnknownFields();
        }

        private JvmFieldSignature(boolean z10) {
            this.f33492q = (byte) -1;
            this.f33493r = -1;
            this.f33488e = ByteString.EMPTY;
        }

        private JvmFieldSignature(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33492q = (byte) -1;
            this.f33493r = -1;
            l();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                this.f33489i |= 1;
                                this.f33490o = codedInputStream.readInt32();
                            } else if (readTag != 16) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f33489i |= 2;
                                this.f33491p = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33488e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33488e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33488e = newOutput.toByteString();
                throw th4;
            }
            this.f33488e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface JvmFieldSignatureOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class JvmMethodSignature extends GeneratedMessageLite implements JvmMethodSignatureOrBuilder {
        public static Parser<JvmMethodSignature> PARSER = new a();

        /* renamed from: s  reason: collision with root package name */
        private static final JvmMethodSignature f33497s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33498e;

        /* renamed from: i  reason: collision with root package name */
        private int f33499i;

        /* renamed from: o  reason: collision with root package name */
        private int f33500o;

        /* renamed from: p  reason: collision with root package name */
        private int f33501p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33502q;

        /* renamed from: r  reason: collision with root package name */
        private int f33503r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<JvmMethodSignature, Builder> implements JvmMethodSignatureOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33504e;

            /* renamed from: i  reason: collision with root package name */
            private int f33505i;

            /* renamed from: o  reason: collision with root package name */
            private int f33506o;

            private Builder() {
                d();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
            }

            public JvmMethodSignature buildPartial() {
                JvmMethodSignature jvmMethodSignature = new JvmMethodSignature(this);
                int i10 = this.f33504e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                jvmMethodSignature.f33500o = this.f33505i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                jvmMethodSignature.f33501p = this.f33506o;
                jvmMethodSignature.f33499i = i11;
                return jvmMethodSignature;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            public Builder setDesc(int i10) {
                this.f33504e |= 2;
                this.f33506o = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f33504e |= 1;
                this.f33505i = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public JvmMethodSignature build() {
                JvmMethodSignature buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public JvmMethodSignature getDefaultInstanceForType() {
                return JvmMethodSignature.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(JvmMethodSignature jvmMethodSignature) {
                if (jvmMethodSignature == JvmMethodSignature.getDefaultInstance()) {
                    return this;
                }
                if (jvmMethodSignature.hasName()) {
                    setName(jvmMethodSignature.getName());
                }
                if (jvmMethodSignature.hasDesc()) {
                    setDesc(jvmMethodSignature.getDesc());
                }
                setUnknownFields(getUnknownFields().concat(jvmMethodSignature.f33498e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.JvmMethodSignature.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$JvmMethodSignature> r1 = kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.JvmMethodSignature.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$JvmMethodSignature r3 = (kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.JvmMethodSignature) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$JvmMethodSignature r4 = (kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.JvmMethodSignature) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.JvmMethodSignature.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$JvmMethodSignature$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public JvmMethodSignature parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new JvmMethodSignature(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            JvmMethodSignature jvmMethodSignature = new JvmMethodSignature(true);
            f33497s = jvmMethodSignature;
            jvmMethodSignature.l();
        }

        public static JvmMethodSignature getDefaultInstance() {
            return f33497s;
        }

        private void l() {
            this.f33500o = 0;
            this.f33501p = 0;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public int getDesc() {
            return this.f33501p;
        }

        public int getName() {
            return this.f33500o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<JvmMethodSignature> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33503r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33499i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33500o);
            } else {
                i10 = 0;
            }
            if ((this.f33499i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33501p);
            }
            int size = i10 + this.f33498e.size();
            this.f33503r = size;
            return size;
        }

        public boolean hasDesc() {
            if ((this.f33499i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f33499i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33502q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f33502q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33499i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33500o);
            }
            if ((this.f33499i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f33501p);
            }
            codedOutputStream.writeRawBytes(this.f33498e);
        }

        public static Builder newBuilder(JvmMethodSignature jvmMethodSignature) {
            return newBuilder().mergeFrom(jvmMethodSignature);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public JvmMethodSignature getDefaultInstanceForType() {
            return f33497s;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private JvmMethodSignature(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f33502q = (byte) -1;
            this.f33503r = -1;
            this.f33498e = builder.getUnknownFields();
        }

        private JvmMethodSignature(boolean z10) {
            this.f33502q = (byte) -1;
            this.f33503r = -1;
            this.f33498e = ByteString.EMPTY;
        }

        private JvmMethodSignature(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33502q = (byte) -1;
            this.f33503r = -1;
            l();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                this.f33499i |= 1;
                                this.f33500o = codedInputStream.readInt32();
                            } else if (readTag != 16) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f33499i |= 2;
                                this.f33501p = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33498e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33498e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33498e = newOutput.toByteString();
                throw th4;
            }
            this.f33498e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface JvmMethodSignatureOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class JvmPropertySignature extends GeneratedMessageLite implements JvmPropertySignatureOrBuilder {
        public static Parser<JvmPropertySignature> PARSER = new a();

        /* renamed from: v  reason: collision with root package name */
        private static final JvmPropertySignature f33507v;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33508e;

        /* renamed from: i  reason: collision with root package name */
        private int f33509i;

        /* renamed from: o  reason: collision with root package name */
        private JvmFieldSignature f33510o;

        /* renamed from: p  reason: collision with root package name */
        private JvmMethodSignature f33511p;

        /* renamed from: q  reason: collision with root package name */
        private JvmMethodSignature f33512q;

        /* renamed from: r  reason: collision with root package name */
        private JvmMethodSignature f33513r;

        /* renamed from: s  reason: collision with root package name */
        private JvmMethodSignature f33514s;

        /* renamed from: t  reason: collision with root package name */
        private byte f33515t;

        /* renamed from: u  reason: collision with root package name */
        private int f33516u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<JvmPropertySignature, Builder> implements JvmPropertySignatureOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33517e;

            /* renamed from: i  reason: collision with root package name */
            private JvmFieldSignature f33518i = JvmFieldSignature.getDefaultInstance();

            /* renamed from: o  reason: collision with root package name */
            private JvmMethodSignature f33519o = JvmMethodSignature.getDefaultInstance();

            /* renamed from: p  reason: collision with root package name */
            private JvmMethodSignature f33520p = JvmMethodSignature.getDefaultInstance();

            /* renamed from: q  reason: collision with root package name */
            private JvmMethodSignature f33521q = JvmMethodSignature.getDefaultInstance();

            /* renamed from: r  reason: collision with root package name */
            private JvmMethodSignature f33522r = JvmMethodSignature.getDefaultInstance();

            private Builder() {
                d();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
            }

            public JvmPropertySignature buildPartial() {
                JvmPropertySignature jvmPropertySignature = new JvmPropertySignature(this);
                int i10 = this.f33517e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                jvmPropertySignature.f33510o = this.f33518i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                jvmPropertySignature.f33511p = this.f33519o;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                jvmPropertySignature.f33512q = this.f33520p;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                jvmPropertySignature.f33513r = this.f33521q;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                jvmPropertySignature.f33514s = this.f33522r;
                jvmPropertySignature.f33509i = i11;
                return jvmPropertySignature;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            public Builder mergeDelegateMethod(JvmMethodSignature jvmMethodSignature) {
                if ((this.f33517e & 16) == 16 && this.f33522r != JvmMethodSignature.getDefaultInstance()) {
                    this.f33522r = JvmMethodSignature.newBuilder(this.f33522r).mergeFrom(jvmMethodSignature).buildPartial();
                } else {
                    this.f33522r = jvmMethodSignature;
                }
                this.f33517e |= 16;
                return this;
            }

            public Builder mergeField(JvmFieldSignature jvmFieldSignature) {
                if ((this.f33517e & 1) == 1 && this.f33518i != JvmFieldSignature.getDefaultInstance()) {
                    this.f33518i = JvmFieldSignature.newBuilder(this.f33518i).mergeFrom(jvmFieldSignature).buildPartial();
                } else {
                    this.f33518i = jvmFieldSignature;
                }
                this.f33517e |= 1;
                return this;
            }

            public Builder mergeGetter(JvmMethodSignature jvmMethodSignature) {
                if ((this.f33517e & 4) == 4 && this.f33520p != JvmMethodSignature.getDefaultInstance()) {
                    this.f33520p = JvmMethodSignature.newBuilder(this.f33520p).mergeFrom(jvmMethodSignature).buildPartial();
                } else {
                    this.f33520p = jvmMethodSignature;
                }
                this.f33517e |= 4;
                return this;
            }

            public Builder mergeSetter(JvmMethodSignature jvmMethodSignature) {
                if ((this.f33517e & 8) == 8 && this.f33521q != JvmMethodSignature.getDefaultInstance()) {
                    this.f33521q = JvmMethodSignature.newBuilder(this.f33521q).mergeFrom(jvmMethodSignature).buildPartial();
                } else {
                    this.f33521q = jvmMethodSignature;
                }
                this.f33517e |= 8;
                return this;
            }

            public Builder mergeSyntheticMethod(JvmMethodSignature jvmMethodSignature) {
                if ((this.f33517e & 2) == 2 && this.f33519o != JvmMethodSignature.getDefaultInstance()) {
                    this.f33519o = JvmMethodSignature.newBuilder(this.f33519o).mergeFrom(jvmMethodSignature).buildPartial();
                } else {
                    this.f33519o = jvmMethodSignature;
                }
                this.f33517e |= 2;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public JvmPropertySignature build() {
                JvmPropertySignature buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public JvmPropertySignature getDefaultInstanceForType() {
                return JvmPropertySignature.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(JvmPropertySignature jvmPropertySignature) {
                if (jvmPropertySignature == JvmPropertySignature.getDefaultInstance()) {
                    return this;
                }
                if (jvmPropertySignature.hasField()) {
                    mergeField(jvmPropertySignature.getField());
                }
                if (jvmPropertySignature.hasSyntheticMethod()) {
                    mergeSyntheticMethod(jvmPropertySignature.getSyntheticMethod());
                }
                if (jvmPropertySignature.hasGetter()) {
                    mergeGetter(jvmPropertySignature.getGetter());
                }
                if (jvmPropertySignature.hasSetter()) {
                    mergeSetter(jvmPropertySignature.getSetter());
                }
                if (jvmPropertySignature.hasDelegateMethod()) {
                    mergeDelegateMethod(jvmPropertySignature.getDelegateMethod());
                }
                setUnknownFields(getUnknownFields().concat(jvmPropertySignature.f33508e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.JvmPropertySignature.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$JvmPropertySignature> r1 = kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.JvmPropertySignature.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$JvmPropertySignature r3 = (kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.JvmPropertySignature) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$JvmPropertySignature r4 = (kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.JvmPropertySignature) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.JvmPropertySignature.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$JvmPropertySignature$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public JvmPropertySignature parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new JvmPropertySignature(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            JvmPropertySignature jvmPropertySignature = new JvmPropertySignature(true);
            f33507v = jvmPropertySignature;
            jvmPropertySignature.o();
        }

        public static JvmPropertySignature getDefaultInstance() {
            return f33507v;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void o() {
            this.f33510o = JvmFieldSignature.getDefaultInstance();
            this.f33511p = JvmMethodSignature.getDefaultInstance();
            this.f33512q = JvmMethodSignature.getDefaultInstance();
            this.f33513r = JvmMethodSignature.getDefaultInstance();
            this.f33514s = JvmMethodSignature.getDefaultInstance();
        }

        public JvmMethodSignature getDelegateMethod() {
            return this.f33514s;
        }

        public JvmFieldSignature getField() {
            return this.f33510o;
        }

        public JvmMethodSignature getGetter() {
            return this.f33512q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<JvmPropertySignature> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33516u;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33509i & 1) == 1) {
                i10 = CodedOutputStream.computeMessageSize(1, this.f33510o);
            } else {
                i10 = 0;
            }
            if ((this.f33509i & 2) == 2) {
                i10 += CodedOutputStream.computeMessageSize(2, this.f33511p);
            }
            if ((this.f33509i & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f33512q);
            }
            if ((this.f33509i & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f33513r);
            }
            if ((this.f33509i & 16) == 16) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f33514s);
            }
            int size = i10 + this.f33508e.size();
            this.f33516u = size;
            return size;
        }

        public JvmMethodSignature getSetter() {
            return this.f33513r;
        }

        public JvmMethodSignature getSyntheticMethod() {
            return this.f33511p;
        }

        public boolean hasDelegateMethod() {
            if ((this.f33509i & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasField() {
            if ((this.f33509i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasGetter() {
            if ((this.f33509i & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasSetter() {
            if ((this.f33509i & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasSyntheticMethod() {
            if ((this.f33509i & 2) == 2) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33515t;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f33515t = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33509i & 1) == 1) {
                codedOutputStream.writeMessage(1, this.f33510o);
            }
            if ((this.f33509i & 2) == 2) {
                codedOutputStream.writeMessage(2, this.f33511p);
            }
            if ((this.f33509i & 4) == 4) {
                codedOutputStream.writeMessage(3, this.f33512q);
            }
            if ((this.f33509i & 8) == 8) {
                codedOutputStream.writeMessage(4, this.f33513r);
            }
            if ((this.f33509i & 16) == 16) {
                codedOutputStream.writeMessage(5, this.f33514s);
            }
            codedOutputStream.writeRawBytes(this.f33508e);
        }

        public static Builder newBuilder(JvmPropertySignature jvmPropertySignature) {
            return newBuilder().mergeFrom(jvmPropertySignature);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public JvmPropertySignature getDefaultInstanceForType() {
            return f33507v;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private JvmPropertySignature(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f33515t = (byte) -1;
            this.f33516u = -1;
            this.f33508e = builder.getUnknownFields();
        }

        private JvmPropertySignature(boolean z10) {
            this.f33515t = (byte) -1;
            this.f33516u = -1;
            this.f33508e = ByteString.EMPTY;
        }

        private JvmPropertySignature(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33515t = (byte) -1;
            this.f33516u = -1;
            o();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 10) {
                                JvmFieldSignature.Builder builder = (this.f33509i & 1) == 1 ? this.f33510o.toBuilder() : null;
                                JvmFieldSignature jvmFieldSignature = (JvmFieldSignature) codedInputStream.readMessage(JvmFieldSignature.PARSER, extensionRegistryLite);
                                this.f33510o = jvmFieldSignature;
                                if (builder != null) {
                                    builder.mergeFrom(jvmFieldSignature);
                                    this.f33510o = builder.buildPartial();
                                }
                                this.f33509i |= 1;
                            } else if (readTag == 18) {
                                JvmMethodSignature.Builder builder2 = (this.f33509i & 2) == 2 ? this.f33511p.toBuilder() : null;
                                JvmMethodSignature jvmMethodSignature = (JvmMethodSignature) codedInputStream.readMessage(JvmMethodSignature.PARSER, extensionRegistryLite);
                                this.f33511p = jvmMethodSignature;
                                if (builder2 != null) {
                                    builder2.mergeFrom(jvmMethodSignature);
                                    this.f33511p = builder2.buildPartial();
                                }
                                this.f33509i |= 2;
                            } else if (readTag == 26) {
                                JvmMethodSignature.Builder builder3 = (this.f33509i & 4) == 4 ? this.f33512q.toBuilder() : null;
                                JvmMethodSignature jvmMethodSignature2 = (JvmMethodSignature) codedInputStream.readMessage(JvmMethodSignature.PARSER, extensionRegistryLite);
                                this.f33512q = jvmMethodSignature2;
                                if (builder3 != null) {
                                    builder3.mergeFrom(jvmMethodSignature2);
                                    this.f33512q = builder3.buildPartial();
                                }
                                this.f33509i |= 4;
                            } else if (readTag == 34) {
                                JvmMethodSignature.Builder builder4 = (this.f33509i & 8) == 8 ? this.f33513r.toBuilder() : null;
                                JvmMethodSignature jvmMethodSignature3 = (JvmMethodSignature) codedInputStream.readMessage(JvmMethodSignature.PARSER, extensionRegistryLite);
                                this.f33513r = jvmMethodSignature3;
                                if (builder4 != null) {
                                    builder4.mergeFrom(jvmMethodSignature3);
                                    this.f33513r = builder4.buildPartial();
                                }
                                this.f33509i |= 8;
                            } else if (readTag != 42) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                JvmMethodSignature.Builder builder5 = (this.f33509i & 16) == 16 ? this.f33514s.toBuilder() : null;
                                JvmMethodSignature jvmMethodSignature4 = (JvmMethodSignature) codedInputStream.readMessage(JvmMethodSignature.PARSER, extensionRegistryLite);
                                this.f33514s = jvmMethodSignature4;
                                if (builder5 != null) {
                                    builder5.mergeFrom(jvmMethodSignature4);
                                    this.f33514s = builder5.buildPartial();
                                }
                                this.f33509i |= 16;
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33508e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33508e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33508e = newOutput.toByteString();
                throw th4;
            }
            this.f33508e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface JvmPropertySignatureOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class StringTableTypes extends GeneratedMessageLite implements StringTableTypesOrBuilder {
        public static Parser<StringTableTypes> PARSER = new a();

        /* renamed from: s  reason: collision with root package name */
        private static final StringTableTypes f33523s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33524e;

        /* renamed from: i  reason: collision with root package name */
        private List f33525i;

        /* renamed from: o  reason: collision with root package name */
        private List f33526o;

        /* renamed from: p  reason: collision with root package name */
        private int f33527p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33528q;

        /* renamed from: r  reason: collision with root package name */
        private int f33529r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<StringTableTypes, Builder> implements StringTableTypesOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33530e;

            /* renamed from: i  reason: collision with root package name */
            private List f33531i;

            /* renamed from: o  reason: collision with root package name */
            private List f33532o;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33531i = list;
                this.f33532o = list;
                f();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f33530e & 2) != 2) {
                    this.f33532o = new ArrayList(this.f33532o);
                    this.f33530e |= 2;
                }
            }

            private void e() {
                if ((this.f33530e & 1) != 1) {
                    this.f33531i = new ArrayList(this.f33531i);
                    this.f33530e |= 1;
                }
            }

            private void f() {
            }

            public StringTableTypes buildPartial() {
                StringTableTypes stringTableTypes = new StringTableTypes(this);
                if ((this.f33530e & 1) == 1) {
                    this.f33531i = Collections.unmodifiableList(this.f33531i);
                    this.f33530e &= -2;
                }
                stringTableTypes.f33525i = this.f33531i;
                if ((this.f33530e & 2) == 2) {
                    this.f33532o = Collections.unmodifiableList(this.f33532o);
                    this.f33530e &= -3;
                }
                stringTableTypes.f33526o = this.f33532o;
                return stringTableTypes;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public StringTableTypes build() {
                StringTableTypes buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public StringTableTypes getDefaultInstanceForType() {
                return StringTableTypes.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(StringTableTypes stringTableTypes) {
                if (stringTableTypes == StringTableTypes.getDefaultInstance()) {
                    return this;
                }
                if (!stringTableTypes.f33525i.isEmpty()) {
                    if (this.f33531i.isEmpty()) {
                        this.f33531i = stringTableTypes.f33525i;
                        this.f33530e &= -2;
                    } else {
                        e();
                        this.f33531i.addAll(stringTableTypes.f33525i);
                    }
                }
                if (!stringTableTypes.f33526o.isEmpty()) {
                    if (this.f33532o.isEmpty()) {
                        this.f33532o = stringTableTypes.f33526o;
                        this.f33530e &= -3;
                    } else {
                        d();
                        this.f33532o.addAll(stringTableTypes.f33526o);
                    }
                }
                setUnknownFields(getUnknownFields().concat(stringTableTypes.f33524e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.StringTableTypes.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$StringTableTypes> r1 = kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.StringTableTypes.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$StringTableTypes r3 = (kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.StringTableTypes) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$StringTableTypes r4 = (kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.StringTableTypes) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.StringTableTypes.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$StringTableTypes$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Record extends GeneratedMessageLite implements RecordOrBuilder {
            public static Parser<Record> PARSER = new a();

            /* renamed from: y  reason: collision with root package name */
            private static final Record f33533y;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f33534e;

            /* renamed from: i  reason: collision with root package name */
            private int f33535i;

            /* renamed from: o  reason: collision with root package name */
            private int f33536o;

            /* renamed from: p  reason: collision with root package name */
            private int f33537p;

            /* renamed from: q  reason: collision with root package name */
            private Object f33538q;

            /* renamed from: r  reason: collision with root package name */
            private Operation f33539r;

            /* renamed from: s  reason: collision with root package name */
            private List f33540s;

            /* renamed from: t  reason: collision with root package name */
            private int f33541t;

            /* renamed from: u  reason: collision with root package name */
            private List f33542u;

            /* renamed from: v  reason: collision with root package name */
            private int f33543v;

            /* renamed from: w  reason: collision with root package name */
            private byte f33544w;

            /* renamed from: x  reason: collision with root package name */
            private int f33545x;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<Record, Builder> implements RecordOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f33546e;

                /* renamed from: o  reason: collision with root package name */
                private int f33548o;

                /* renamed from: r  reason: collision with root package name */
                private List f33551r;

                /* renamed from: s  reason: collision with root package name */
                private List f33552s;

                /* renamed from: i  reason: collision with root package name */
                private int f33547i = 1;

                /* renamed from: p  reason: collision with root package name */
                private Object f33549p = "";

                /* renamed from: q  reason: collision with root package name */
                private Operation f33550q = Operation.NONE;

                private Builder() {
                    List list = Collections.EMPTY_LIST;
                    this.f33551r = list;
                    this.f33552s = list;
                    f();
                }

                static /* synthetic */ Builder b() {
                    return c();
                }

                private static Builder c() {
                    return new Builder();
                }

                private void d() {
                    if ((this.f33546e & 32) != 32) {
                        this.f33552s = new ArrayList(this.f33552s);
                        this.f33546e |= 32;
                    }
                }

                private void e() {
                    if ((this.f33546e & 16) != 16) {
                        this.f33551r = new ArrayList(this.f33551r);
                        this.f33546e |= 16;
                    }
                }

                private void f() {
                }

                public Record buildPartial() {
                    Record record = new Record(this);
                    int i10 = this.f33546e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    record.f33536o = this.f33547i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    record.f33537p = this.f33548o;
                    if ((i10 & 4) == 4) {
                        i11 |= 4;
                    }
                    record.f33538q = this.f33549p;
                    if ((i10 & 8) == 8) {
                        i11 |= 8;
                    }
                    record.f33539r = this.f33550q;
                    if ((this.f33546e & 16) == 16) {
                        this.f33551r = Collections.unmodifiableList(this.f33551r);
                        this.f33546e &= -17;
                    }
                    record.f33540s = this.f33551r;
                    if ((this.f33546e & 32) == 32) {
                        this.f33552s = Collections.unmodifiableList(this.f33552s);
                        this.f33546e &= -33;
                    }
                    record.f33542u = this.f33552s;
                    record.f33535i = i11;
                    return record;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public final boolean isInitialized() {
                    return true;
                }

                public Builder setOperation(Operation operation) {
                    operation.getClass();
                    this.f33546e |= 8;
                    this.f33550q = operation;
                    return this;
                }

                public Builder setPredefinedIndex(int i10) {
                    this.f33546e |= 2;
                    this.f33548o = i10;
                    return this;
                }

                public Builder setRange(int i10) {
                    this.f33546e |= 1;
                    this.f33547i = i10;
                    return this;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                public Record build() {
                    Record buildPartial = buildPartial();
                    if (buildPartial.isInitialized()) {
                        return buildPartial;
                    }
                    throw AbstractMessageLite.Builder.a(buildPartial);
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public Record getDefaultInstanceForType() {
                    return Record.getDefaultInstance();
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
                public Builder clone() {
                    return c().mergeFrom(buildPartial());
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
                public Builder mergeFrom(Record record) {
                    if (record == Record.getDefaultInstance()) {
                        return this;
                    }
                    if (record.hasRange()) {
                        setRange(record.getRange());
                    }
                    if (record.hasPredefinedIndex()) {
                        setPredefinedIndex(record.getPredefinedIndex());
                    }
                    if (record.hasString()) {
                        this.f33546e |= 4;
                        this.f33549p = record.f33538q;
                    }
                    if (record.hasOperation()) {
                        setOperation(record.getOperation());
                    }
                    if (!record.f33540s.isEmpty()) {
                        if (this.f33551r.isEmpty()) {
                            this.f33551r = record.f33540s;
                            this.f33546e &= -17;
                        } else {
                            e();
                            this.f33551r.addAll(record.f33540s);
                        }
                    }
                    if (!record.f33542u.isEmpty()) {
                        if (this.f33552s.isEmpty()) {
                            this.f33552s = record.f33542u;
                            this.f33546e &= -33;
                        } else {
                            d();
                            this.f33552s.addAll(record.f33542u);
                        }
                    }
                    setUnknownFields(getUnknownFields().concat(record.f33534e));
                    return this;
                }

                /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
                @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                /*
                    Code decompiled incorrectly, please refer to instructions dump.
                    To view partially-correct add '--show-bad-code' argument
                */
                public kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.StringTableTypes.Record.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                    /*
                        r2 = this;
                        r0 = 0
                        kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$StringTableTypes$Record> r1 = kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.StringTableTypes.Record.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$StringTableTypes$Record r3 = (kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.StringTableTypes.Record) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        if (r3 == 0) goto Le
                        r2.mergeFrom(r3)
                    Le:
                        return r2
                    Lf:
                        r3 = move-exception
                        goto L1b
                    L11:
                        r3 = move-exception
                        kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                        kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$StringTableTypes$Record r4 = (kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.StringTableTypes.Record) r4     // Catch: java.lang.Throwable -> Lf
                        throw r3     // Catch: java.lang.Throwable -> L19
                    L19:
                        r3 = move-exception
                        r0 = r4
                    L1b:
                        if (r0 == 0) goto L20
                        r2.mergeFrom(r0)
                    L20:
                        throw r3
                    */
                    throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf.StringTableTypes.Record.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf$StringTableTypes$Record$Builder");
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public enum Operation implements Internal.EnumLite {
                NONE(0, 0),
                INTERNAL_TO_CLASS_ID(1, 1),
                DESC_TO_CLASS_ID(2, 2);
                

                /* renamed from: e  reason: collision with root package name */
                private static Internal.EnumLiteMap f33553e = new a();

                /* renamed from: d  reason: collision with root package name */
                private final int f33555d;

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                static class a implements Internal.EnumLiteMap {
                    a() {
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                    /* renamed from: a */
                    public Operation findValueByNumber(int i10) {
                        return Operation.valueOf(i10);
                    }
                }

                Operation(int i10, int i11) {
                    this.f33555d = i11;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                public final int getNumber() {
                    return this.f33555d;
                }

                public static Operation valueOf(int i10) {
                    if (i10 != 0) {
                        if (i10 != 1) {
                            if (i10 != 2) {
                                return null;
                            }
                            return DESC_TO_CLASS_ID;
                        }
                        return INTERNAL_TO_CLASS_ID;
                    }
                    return NONE;
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a extends AbstractParser {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
                /* renamed from: c */
                public Record parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                    return new Record(codedInputStream, extensionRegistryLite);
                }
            }

            static {
                Record record = new Record(true);
                f33533y = record;
                record.s();
            }

            public static Record getDefaultInstance() {
                return f33533y;
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            private void s() {
                this.f33536o = 1;
                this.f33537p = 0;
                this.f33538q = "";
                this.f33539r = Operation.NONE;
                List list = Collections.EMPTY_LIST;
                this.f33540s = list;
                this.f33542u = list;
            }

            public Operation getOperation() {
                return this.f33539r;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<Record> getParserForType() {
                return PARSER;
            }

            public int getPredefinedIndex() {
                return this.f33537p;
            }

            public int getRange() {
                return this.f33536o;
            }

            public int getReplaceCharCount() {
                return this.f33542u.size();
            }

            public List<Integer> getReplaceCharList() {
                return this.f33542u;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f33545x;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f33535i & 1) == 1) {
                    i10 = CodedOutputStream.computeInt32Size(1, this.f33536o);
                } else {
                    i10 = 0;
                }
                if ((this.f33535i & 2) == 2) {
                    i10 += CodedOutputStream.computeInt32Size(2, this.f33537p);
                }
                if ((this.f33535i & 8) == 8) {
                    i10 += CodedOutputStream.computeEnumSize(3, this.f33539r.getNumber());
                }
                int i12 = 0;
                for (int i13 = 0; i13 < this.f33540s.size(); i13++) {
                    i12 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33540s.get(i13)).intValue());
                }
                int i14 = i10 + i12;
                if (!getSubstringIndexList().isEmpty()) {
                    i14 = i14 + 1 + CodedOutputStream.computeInt32SizeNoTag(i12);
                }
                this.f33541t = i12;
                int i15 = 0;
                for (int i16 = 0; i16 < this.f33542u.size(); i16++) {
                    i15 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33542u.get(i16)).intValue());
                }
                int i17 = i14 + i15;
                if (!getReplaceCharList().isEmpty()) {
                    i17 = i17 + 1 + CodedOutputStream.computeInt32SizeNoTag(i15);
                }
                this.f33543v = i15;
                if ((this.f33535i & 4) == 4) {
                    i17 += CodedOutputStream.computeBytesSize(6, getStringBytes());
                }
                int size = i17 + this.f33534e.size();
                this.f33545x = size;
                return size;
            }

            public String getString() {
                Object obj = this.f33538q;
                if (obj instanceof String) {
                    return (String) obj;
                }
                ByteString byteString = (ByteString) obj;
                String stringUtf8 = byteString.toStringUtf8();
                if (byteString.isValidUtf8()) {
                    this.f33538q = stringUtf8;
                }
                return stringUtf8;
            }

            public ByteString getStringBytes() {
                Object obj = this.f33538q;
                if (obj instanceof String) {
                    ByteString copyFromUtf8 = ByteString.copyFromUtf8((String) obj);
                    this.f33538q = copyFromUtf8;
                    return copyFromUtf8;
                }
                return (ByteString) obj;
            }

            public int getSubstringIndexCount() {
                return this.f33540s.size();
            }

            public List<Integer> getSubstringIndexList() {
                return this.f33540s;
            }

            public boolean hasOperation() {
                if ((this.f33535i & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasPredefinedIndex() {
                if ((this.f33535i & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasRange() {
                if ((this.f33535i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasString() {
                if ((this.f33535i & 4) == 4) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f33544w;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                this.f33544w = (byte) 1;
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f33535i & 1) == 1) {
                    codedOutputStream.writeInt32(1, this.f33536o);
                }
                if ((this.f33535i & 2) == 2) {
                    codedOutputStream.writeInt32(2, this.f33537p);
                }
                if ((this.f33535i & 8) == 8) {
                    codedOutputStream.writeEnum(3, this.f33539r.getNumber());
                }
                if (getSubstringIndexList().size() > 0) {
                    codedOutputStream.writeRawVarint32(34);
                    codedOutputStream.writeRawVarint32(this.f33541t);
                }
                for (int i10 = 0; i10 < this.f33540s.size(); i10++) {
                    codedOutputStream.writeInt32NoTag(((Integer) this.f33540s.get(i10)).intValue());
                }
                if (getReplaceCharList().size() > 0) {
                    codedOutputStream.writeRawVarint32(42);
                    codedOutputStream.writeRawVarint32(this.f33543v);
                }
                for (int i11 = 0; i11 < this.f33542u.size(); i11++) {
                    codedOutputStream.writeInt32NoTag(((Integer) this.f33542u.get(i11)).intValue());
                }
                if ((this.f33535i & 4) == 4) {
                    codedOutputStream.writeBytes(6, getStringBytes());
                }
                codedOutputStream.writeRawBytes(this.f33534e);
            }

            public static Builder newBuilder(Record record) {
                return newBuilder().mergeFrom(record);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Record getDefaultInstanceForType() {
                return f33533y;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Builder newBuilderForType() {
                return newBuilder();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Builder toBuilder() {
                return newBuilder(this);
            }

            private Record(GeneratedMessageLite.Builder builder) {
                super(builder);
                this.f33541t = -1;
                this.f33543v = -1;
                this.f33544w = (byte) -1;
                this.f33545x = -1;
                this.f33534e = builder.getUnknownFields();
            }

            private Record(boolean z10) {
                this.f33541t = -1;
                this.f33543v = -1;
                this.f33544w = (byte) -1;
                this.f33545x = -1;
                this.f33534e = ByteString.EMPTY;
            }

            private Record(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f33541t = -1;
                this.f33543v = -1;
                this.f33544w = (byte) -1;
                this.f33545x = -1;
                s();
                ByteString.Output newOutput = ByteString.newOutput();
                CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
                boolean z10 = false;
                boolean z11 = false;
                while (!z10) {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            if (readTag != 0) {
                                if (readTag == 8) {
                                    this.f33535i |= 1;
                                    this.f33536o = codedInputStream.readInt32();
                                } else if (readTag == 16) {
                                    this.f33535i |= 2;
                                    this.f33537p = codedInputStream.readInt32();
                                } else if (readTag == 24) {
                                    int readEnum = codedInputStream.readEnum();
                                    Operation valueOf = Operation.valueOf(readEnum);
                                    if (valueOf == null) {
                                        newInstance.writeRawVarint32(readTag);
                                        newInstance.writeRawVarint32(readEnum);
                                    } else {
                                        this.f33535i |= 8;
                                        this.f33539r = valueOf;
                                    }
                                } else if (readTag == 32) {
                                    if (!(z11 & true)) {
                                        this.f33540s = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f33540s.add(Integer.valueOf(codedInputStream.readInt32()));
                                } else if (readTag == 34) {
                                    int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33540s = new ArrayList();
                                        z11 |= true;
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33540s.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit);
                                } else if (readTag == 40) {
                                    if (!(z11 & true)) {
                                        this.f33542u = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f33542u.add(Integer.valueOf(codedInputStream.readInt32()));
                                } else if (readTag == 42) {
                                    int pushLimit2 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33542u = new ArrayList();
                                        z11 |= true;
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33542u.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit2);
                                } else if (readTag != 50) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    ByteString readBytes = codedInputStream.readBytes();
                                    this.f33535i |= 4;
                                    this.f33538q = readBytes;
                                }
                            }
                            z10 = true;
                        } catch (Throwable th2) {
                            if (z11 & true) {
                                this.f33540s = Collections.unmodifiableList(this.f33540s);
                            }
                            if (z11 & true) {
                                this.f33542u = Collections.unmodifiableList(this.f33542u);
                            }
                            try {
                                newInstance.flush();
                            } catch (IOException unused) {
                            } catch (Throwable th3) {
                                this.f33534e = newOutput.toByteString();
                                throw th3;
                            }
                            this.f33534e = newOutput.toByteString();
                            e();
                            throw th2;
                        }
                    } catch (InvalidProtocolBufferException e10) {
                        throw e10.setUnfinishedMessage(this);
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                }
                if (z11 & true) {
                    this.f33540s = Collections.unmodifiableList(this.f33540s);
                }
                if (z11 & true) {
                    this.f33542u = Collections.unmodifiableList(this.f33542u);
                }
                try {
                    newInstance.flush();
                } catch (IOException unused2) {
                } catch (Throwable th4) {
                    this.f33534e = newOutput.toByteString();
                    throw th4;
                }
                this.f33534e = newOutput.toByteString();
                e();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public interface RecordOrBuilder extends MessageLiteOrBuilder {
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public StringTableTypes parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new StringTableTypes(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            StringTableTypes stringTableTypes = new StringTableTypes(true);
            f33523s = stringTableTypes;
            stringTableTypes.m();
        }

        public static StringTableTypes getDefaultInstance() {
            return f33523s;
        }

        private void m() {
            List list = Collections.EMPTY_LIST;
            this.f33525i = list;
            this.f33526o = list;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public static StringTableTypes parseDelimitedFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseDelimitedFrom(inputStream, extensionRegistryLite);
        }

        public List<Integer> getLocalNameList() {
            return this.f33526o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<StringTableTypes> getParserForType() {
            return PARSER;
        }

        public List<Record> getRecordList() {
            return this.f33525i;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f33529r;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33525i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f33525i.get(i12));
            }
            int i13 = 0;
            for (int i14 = 0; i14 < this.f33526o.size(); i14++) {
                i13 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33526o.get(i14)).intValue());
            }
            int i15 = i11 + i13;
            if (!getLocalNameList().isEmpty()) {
                i15 = i15 + 1 + CodedOutputStream.computeInt32SizeNoTag(i13);
            }
            this.f33527p = i13;
            int size = i15 + this.f33524e.size();
            this.f33529r = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33528q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f33528q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f33525i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f33525i.get(i10));
            }
            if (getLocalNameList().size() > 0) {
                codedOutputStream.writeRawVarint32(42);
                codedOutputStream.writeRawVarint32(this.f33527p);
            }
            for (int i11 = 0; i11 < this.f33526o.size(); i11++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33526o.get(i11)).intValue());
            }
            codedOutputStream.writeRawBytes(this.f33524e);
        }

        public static Builder newBuilder(StringTableTypes stringTableTypes) {
            return newBuilder().mergeFrom(stringTableTypes);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public StringTableTypes getDefaultInstanceForType() {
            return f33523s;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private StringTableTypes(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f33527p = -1;
            this.f33528q = (byte) -1;
            this.f33529r = -1;
            this.f33524e = builder.getUnknownFields();
        }

        private StringTableTypes(boolean z10) {
            this.f33527p = -1;
            this.f33528q = (byte) -1;
            this.f33529r = -1;
            this.f33524e = ByteString.EMPTY;
        }

        private StringTableTypes(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33527p = -1;
            this.f33528q = (byte) -1;
            this.f33529r = -1;
            m();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 10) {
                                if (!(z11 & true)) {
                                    this.f33525i = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33525i.add(codedInputStream.readMessage(Record.PARSER, extensionRegistryLite));
                            } else if (readTag == 40) {
                                if (!(z11 & true)) {
                                    this.f33526o = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33526o.add(Integer.valueOf(codedInputStream.readInt32()));
                            } else if (readTag != 42) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33526o = new ArrayList();
                                    z11 |= true;
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33526o.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit);
                            }
                        }
                        z10 = true;
                    } catch (InvalidProtocolBufferException e10) {
                        throw e10.setUnfinishedMessage(this);
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } catch (Throwable th2) {
                    if (z11 & true) {
                        this.f33525i = Collections.unmodifiableList(this.f33525i);
                    }
                    if (z11 & true) {
                        this.f33526o = Collections.unmodifiableList(this.f33526o);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33524e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33524e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11 & true) {
                this.f33525i = Collections.unmodifiableList(this.f33525i);
            }
            if (z11 & true) {
                this.f33526o = Collections.unmodifiableList(this.f33526o);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33524e = newOutput.toByteString();
                throw th4;
            }
            this.f33524e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface StringTableTypesOrBuilder extends MessageLiteOrBuilder {
    }

    static {
        ProtoBuf.Constructor defaultInstance = ProtoBuf.Constructor.getDefaultInstance();
        JvmMethodSignature defaultInstance2 = JvmMethodSignature.getDefaultInstance();
        JvmMethodSignature defaultInstance3 = JvmMethodSignature.getDefaultInstance();
        WireFormat.FieldType fieldType = WireFormat.FieldType.MESSAGE;
        constructorSignature = GeneratedMessageLite.newSingularGeneratedExtension(defaultInstance, defaultInstance2, defaultInstance3, null, 100, fieldType, JvmMethodSignature.class);
        methodSignature = GeneratedMessageLite.newSingularGeneratedExtension(ProtoBuf.Function.getDefaultInstance(), JvmMethodSignature.getDefaultInstance(), JvmMethodSignature.getDefaultInstance(), null, 100, fieldType, JvmMethodSignature.class);
        ProtoBuf.Function defaultInstance4 = ProtoBuf.Function.getDefaultInstance();
        WireFormat.FieldType fieldType2 = WireFormat.FieldType.INT32;
        lambdaClassOriginName = GeneratedMessageLite.newSingularGeneratedExtension(defaultInstance4, 0, null, null, 101, fieldType2, Integer.class);
        propertySignature = GeneratedMessageLite.newSingularGeneratedExtension(ProtoBuf.Property.getDefaultInstance(), JvmPropertySignature.getDefaultInstance(), JvmPropertySignature.getDefaultInstance(), null, 100, fieldType, JvmPropertySignature.class);
        flags = GeneratedMessageLite.newSingularGeneratedExtension(ProtoBuf.Property.getDefaultInstance(), 0, null, null, 101, fieldType2, Integer.class);
        typeAnnotation = GeneratedMessageLite.newRepeatedGeneratedExtension(ProtoBuf.Type.getDefaultInstance(), ProtoBuf.Annotation.getDefaultInstance(), null, 100, fieldType, false, ProtoBuf.Annotation.class);
        isRaw = GeneratedMessageLite.newSingularGeneratedExtension(ProtoBuf.Type.getDefaultInstance(), Boolean.FALSE, null, null, 101, WireFormat.FieldType.BOOL, Boolean.class);
        typeParameterAnnotation = GeneratedMessageLite.newRepeatedGeneratedExtension(ProtoBuf.TypeParameter.getDefaultInstance(), ProtoBuf.Annotation.getDefaultInstance(), null, 100, fieldType, false, ProtoBuf.Annotation.class);
        classModuleName = GeneratedMessageLite.newSingularGeneratedExtension(ProtoBuf.Class.getDefaultInstance(), 0, null, null, 101, fieldType2, Integer.class);
        classLocalVariable = GeneratedMessageLite.newRepeatedGeneratedExtension(ProtoBuf.Class.getDefaultInstance(), ProtoBuf.Property.getDefaultInstance(), null, 102, fieldType, false, ProtoBuf.Property.class);
        anonymousObjectOriginName = GeneratedMessageLite.newSingularGeneratedExtension(ProtoBuf.Class.getDefaultInstance(), 0, null, null, 103, fieldType2, Integer.class);
        jvmClassFlags = GeneratedMessageLite.newSingularGeneratedExtension(ProtoBuf.Class.getDefaultInstance(), 0, null, null, 104, fieldType2, Integer.class);
        packageModuleName = GeneratedMessageLite.newSingularGeneratedExtension(ProtoBuf.Package.getDefaultInstance(), 0, null, null, 101, fieldType2, Integer.class);
        packageLocalVariable = GeneratedMessageLite.newRepeatedGeneratedExtension(ProtoBuf.Package.getDefaultInstance(), ProtoBuf.Property.getDefaultInstance(), null, 102, fieldType, false, ProtoBuf.Property.class);
    }

    public static void registerAllExtensions(ExtensionRegistryLite extensionRegistryLite) {
        extensionRegistryLite.add(constructorSignature);
        extensionRegistryLite.add(methodSignature);
        extensionRegistryLite.add(lambdaClassOriginName);
        extensionRegistryLite.add(propertySignature);
        extensionRegistryLite.add(flags);
        extensionRegistryLite.add(typeAnnotation);
        extensionRegistryLite.add(isRaw);
        extensionRegistryLite.add(typeParameterAnnotation);
        extensionRegistryLite.add(classModuleName);
        extensionRegistryLite.add(classLocalVariable);
        extensionRegistryLite.add(anonymousObjectOriginName);
        extensionRegistryLite.add(jvmClassFlags);
        extensionRegistryLite.add(packageModuleName);
        extensionRegistryLite.add(packageLocalVariable);
    }
}
