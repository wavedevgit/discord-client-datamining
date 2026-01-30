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
        private static final JvmFieldSignature f35020s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f35021e;

        /* renamed from: i  reason: collision with root package name */
        private int f35022i;

        /* renamed from: o  reason: collision with root package name */
        private int f35023o;

        /* renamed from: p  reason: collision with root package name */
        private int f35024p;

        /* renamed from: q  reason: collision with root package name */
        private byte f35025q;

        /* renamed from: r  reason: collision with root package name */
        private int f35026r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<JvmFieldSignature, Builder> implements JvmFieldSignatureOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f35027e;

            /* renamed from: i  reason: collision with root package name */
            private int f35028i;

            /* renamed from: o  reason: collision with root package name */
            private int f35029o;

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
                int i10 = this.f35027e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                jvmFieldSignature.f35023o = this.f35028i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                jvmFieldSignature.f35024p = this.f35029o;
                jvmFieldSignature.f35022i = i11;
                return jvmFieldSignature;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            public Builder setDesc(int i10) {
                this.f35027e |= 2;
                this.f35029o = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f35027e |= 1;
                this.f35028i = i10;
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
                setUnknownFields(getUnknownFields().concat(jvmFieldSignature.f35021e));
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
            f35020s = jvmFieldSignature;
            jvmFieldSignature.l();
        }

        public static JvmFieldSignature getDefaultInstance() {
            return f35020s;
        }

        private void l() {
            this.f35023o = 0;
            this.f35024p = 0;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public int getDesc() {
            return this.f35024p;
        }

        public int getName() {
            return this.f35023o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<JvmFieldSignature> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f35026r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f35022i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f35023o);
            } else {
                i10 = 0;
            }
            if ((this.f35022i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f35024p);
            }
            int size = i10 + this.f35021e.size();
            this.f35026r = size;
            return size;
        }

        public boolean hasDesc() {
            if ((this.f35022i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f35022i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f35025q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f35025q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f35022i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f35023o);
            }
            if ((this.f35022i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f35024p);
            }
            codedOutputStream.writeRawBytes(this.f35021e);
        }

        public static Builder newBuilder(JvmFieldSignature jvmFieldSignature) {
            return newBuilder().mergeFrom(jvmFieldSignature);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public JvmFieldSignature getDefaultInstanceForType() {
            return f35020s;
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
            this.f35025q = (byte) -1;
            this.f35026r = -1;
            this.f35021e = builder.getUnknownFields();
        }

        private JvmFieldSignature(boolean z10) {
            this.f35025q = (byte) -1;
            this.f35026r = -1;
            this.f35021e = ByteString.EMPTY;
        }

        private JvmFieldSignature(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f35025q = (byte) -1;
            this.f35026r = -1;
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
                                this.f35022i |= 1;
                                this.f35023o = codedInputStream.readInt32();
                            } else if (readTag != 16) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f35022i |= 2;
                                this.f35024p = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f35021e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f35021e = newOutput.toByteString();
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
                this.f35021e = newOutput.toByteString();
                throw th4;
            }
            this.f35021e = newOutput.toByteString();
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
        private static final JvmMethodSignature f35030s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f35031e;

        /* renamed from: i  reason: collision with root package name */
        private int f35032i;

        /* renamed from: o  reason: collision with root package name */
        private int f35033o;

        /* renamed from: p  reason: collision with root package name */
        private int f35034p;

        /* renamed from: q  reason: collision with root package name */
        private byte f35035q;

        /* renamed from: r  reason: collision with root package name */
        private int f35036r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<JvmMethodSignature, Builder> implements JvmMethodSignatureOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f35037e;

            /* renamed from: i  reason: collision with root package name */
            private int f35038i;

            /* renamed from: o  reason: collision with root package name */
            private int f35039o;

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
                int i10 = this.f35037e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                jvmMethodSignature.f35033o = this.f35038i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                jvmMethodSignature.f35034p = this.f35039o;
                jvmMethodSignature.f35032i = i11;
                return jvmMethodSignature;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            public Builder setDesc(int i10) {
                this.f35037e |= 2;
                this.f35039o = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f35037e |= 1;
                this.f35038i = i10;
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
                setUnknownFields(getUnknownFields().concat(jvmMethodSignature.f35031e));
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
            f35030s = jvmMethodSignature;
            jvmMethodSignature.l();
        }

        public static JvmMethodSignature getDefaultInstance() {
            return f35030s;
        }

        private void l() {
            this.f35033o = 0;
            this.f35034p = 0;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public int getDesc() {
            return this.f35034p;
        }

        public int getName() {
            return this.f35033o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<JvmMethodSignature> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f35036r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f35032i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f35033o);
            } else {
                i10 = 0;
            }
            if ((this.f35032i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f35034p);
            }
            int size = i10 + this.f35031e.size();
            this.f35036r = size;
            return size;
        }

        public boolean hasDesc() {
            if ((this.f35032i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f35032i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f35035q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f35035q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f35032i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f35033o);
            }
            if ((this.f35032i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f35034p);
            }
            codedOutputStream.writeRawBytes(this.f35031e);
        }

        public static Builder newBuilder(JvmMethodSignature jvmMethodSignature) {
            return newBuilder().mergeFrom(jvmMethodSignature);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public JvmMethodSignature getDefaultInstanceForType() {
            return f35030s;
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
            this.f35035q = (byte) -1;
            this.f35036r = -1;
            this.f35031e = builder.getUnknownFields();
        }

        private JvmMethodSignature(boolean z10) {
            this.f35035q = (byte) -1;
            this.f35036r = -1;
            this.f35031e = ByteString.EMPTY;
        }

        private JvmMethodSignature(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f35035q = (byte) -1;
            this.f35036r = -1;
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
                                this.f35032i |= 1;
                                this.f35033o = codedInputStream.readInt32();
                            } else if (readTag != 16) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f35032i |= 2;
                                this.f35034p = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f35031e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f35031e = newOutput.toByteString();
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
                this.f35031e = newOutput.toByteString();
                throw th4;
            }
            this.f35031e = newOutput.toByteString();
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
        private static final JvmPropertySignature f35040v;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f35041e;

        /* renamed from: i  reason: collision with root package name */
        private int f35042i;

        /* renamed from: o  reason: collision with root package name */
        private JvmFieldSignature f35043o;

        /* renamed from: p  reason: collision with root package name */
        private JvmMethodSignature f35044p;

        /* renamed from: q  reason: collision with root package name */
        private JvmMethodSignature f35045q;

        /* renamed from: r  reason: collision with root package name */
        private JvmMethodSignature f35046r;

        /* renamed from: s  reason: collision with root package name */
        private JvmMethodSignature f35047s;

        /* renamed from: t  reason: collision with root package name */
        private byte f35048t;

        /* renamed from: u  reason: collision with root package name */
        private int f35049u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<JvmPropertySignature, Builder> implements JvmPropertySignatureOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f35050e;

            /* renamed from: i  reason: collision with root package name */
            private JvmFieldSignature f35051i = JvmFieldSignature.getDefaultInstance();

            /* renamed from: o  reason: collision with root package name */
            private JvmMethodSignature f35052o = JvmMethodSignature.getDefaultInstance();

            /* renamed from: p  reason: collision with root package name */
            private JvmMethodSignature f35053p = JvmMethodSignature.getDefaultInstance();

            /* renamed from: q  reason: collision with root package name */
            private JvmMethodSignature f35054q = JvmMethodSignature.getDefaultInstance();

            /* renamed from: r  reason: collision with root package name */
            private JvmMethodSignature f35055r = JvmMethodSignature.getDefaultInstance();

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
                int i10 = this.f35050e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                jvmPropertySignature.f35043o = this.f35051i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                jvmPropertySignature.f35044p = this.f35052o;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                jvmPropertySignature.f35045q = this.f35053p;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                jvmPropertySignature.f35046r = this.f35054q;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                jvmPropertySignature.f35047s = this.f35055r;
                jvmPropertySignature.f35042i = i11;
                return jvmPropertySignature;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            public Builder mergeDelegateMethod(JvmMethodSignature jvmMethodSignature) {
                if ((this.f35050e & 16) == 16 && this.f35055r != JvmMethodSignature.getDefaultInstance()) {
                    this.f35055r = JvmMethodSignature.newBuilder(this.f35055r).mergeFrom(jvmMethodSignature).buildPartial();
                } else {
                    this.f35055r = jvmMethodSignature;
                }
                this.f35050e |= 16;
                return this;
            }

            public Builder mergeField(JvmFieldSignature jvmFieldSignature) {
                if ((this.f35050e & 1) == 1 && this.f35051i != JvmFieldSignature.getDefaultInstance()) {
                    this.f35051i = JvmFieldSignature.newBuilder(this.f35051i).mergeFrom(jvmFieldSignature).buildPartial();
                } else {
                    this.f35051i = jvmFieldSignature;
                }
                this.f35050e |= 1;
                return this;
            }

            public Builder mergeGetter(JvmMethodSignature jvmMethodSignature) {
                if ((this.f35050e & 4) == 4 && this.f35053p != JvmMethodSignature.getDefaultInstance()) {
                    this.f35053p = JvmMethodSignature.newBuilder(this.f35053p).mergeFrom(jvmMethodSignature).buildPartial();
                } else {
                    this.f35053p = jvmMethodSignature;
                }
                this.f35050e |= 4;
                return this;
            }

            public Builder mergeSetter(JvmMethodSignature jvmMethodSignature) {
                if ((this.f35050e & 8) == 8 && this.f35054q != JvmMethodSignature.getDefaultInstance()) {
                    this.f35054q = JvmMethodSignature.newBuilder(this.f35054q).mergeFrom(jvmMethodSignature).buildPartial();
                } else {
                    this.f35054q = jvmMethodSignature;
                }
                this.f35050e |= 8;
                return this;
            }

            public Builder mergeSyntheticMethod(JvmMethodSignature jvmMethodSignature) {
                if ((this.f35050e & 2) == 2 && this.f35052o != JvmMethodSignature.getDefaultInstance()) {
                    this.f35052o = JvmMethodSignature.newBuilder(this.f35052o).mergeFrom(jvmMethodSignature).buildPartial();
                } else {
                    this.f35052o = jvmMethodSignature;
                }
                this.f35050e |= 2;
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
                setUnknownFields(getUnknownFields().concat(jvmPropertySignature.f35041e));
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
            f35040v = jvmPropertySignature;
            jvmPropertySignature.o();
        }

        public static JvmPropertySignature getDefaultInstance() {
            return f35040v;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void o() {
            this.f35043o = JvmFieldSignature.getDefaultInstance();
            this.f35044p = JvmMethodSignature.getDefaultInstance();
            this.f35045q = JvmMethodSignature.getDefaultInstance();
            this.f35046r = JvmMethodSignature.getDefaultInstance();
            this.f35047s = JvmMethodSignature.getDefaultInstance();
        }

        public JvmMethodSignature getDelegateMethod() {
            return this.f35047s;
        }

        public JvmFieldSignature getField() {
            return this.f35043o;
        }

        public JvmMethodSignature getGetter() {
            return this.f35045q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<JvmPropertySignature> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f35049u;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f35042i & 1) == 1) {
                i10 = CodedOutputStream.computeMessageSize(1, this.f35043o);
            } else {
                i10 = 0;
            }
            if ((this.f35042i & 2) == 2) {
                i10 += CodedOutputStream.computeMessageSize(2, this.f35044p);
            }
            if ((this.f35042i & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f35045q);
            }
            if ((this.f35042i & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f35046r);
            }
            if ((this.f35042i & 16) == 16) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f35047s);
            }
            int size = i10 + this.f35041e.size();
            this.f35049u = size;
            return size;
        }

        public JvmMethodSignature getSetter() {
            return this.f35046r;
        }

        public JvmMethodSignature getSyntheticMethod() {
            return this.f35044p;
        }

        public boolean hasDelegateMethod() {
            if ((this.f35042i & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasField() {
            if ((this.f35042i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasGetter() {
            if ((this.f35042i & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasSetter() {
            if ((this.f35042i & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasSyntheticMethod() {
            if ((this.f35042i & 2) == 2) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f35048t;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f35048t = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f35042i & 1) == 1) {
                codedOutputStream.writeMessage(1, this.f35043o);
            }
            if ((this.f35042i & 2) == 2) {
                codedOutputStream.writeMessage(2, this.f35044p);
            }
            if ((this.f35042i & 4) == 4) {
                codedOutputStream.writeMessage(3, this.f35045q);
            }
            if ((this.f35042i & 8) == 8) {
                codedOutputStream.writeMessage(4, this.f35046r);
            }
            if ((this.f35042i & 16) == 16) {
                codedOutputStream.writeMessage(5, this.f35047s);
            }
            codedOutputStream.writeRawBytes(this.f35041e);
        }

        public static Builder newBuilder(JvmPropertySignature jvmPropertySignature) {
            return newBuilder().mergeFrom(jvmPropertySignature);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public JvmPropertySignature getDefaultInstanceForType() {
            return f35040v;
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
            this.f35048t = (byte) -1;
            this.f35049u = -1;
            this.f35041e = builder.getUnknownFields();
        }

        private JvmPropertySignature(boolean z10) {
            this.f35048t = (byte) -1;
            this.f35049u = -1;
            this.f35041e = ByteString.EMPTY;
        }

        private JvmPropertySignature(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f35048t = (byte) -1;
            this.f35049u = -1;
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
                                JvmFieldSignature.Builder builder = (this.f35042i & 1) == 1 ? this.f35043o.toBuilder() : null;
                                JvmFieldSignature jvmFieldSignature = (JvmFieldSignature) codedInputStream.readMessage(JvmFieldSignature.PARSER, extensionRegistryLite);
                                this.f35043o = jvmFieldSignature;
                                if (builder != null) {
                                    builder.mergeFrom(jvmFieldSignature);
                                    this.f35043o = builder.buildPartial();
                                }
                                this.f35042i |= 1;
                            } else if (readTag == 18) {
                                JvmMethodSignature.Builder builder2 = (this.f35042i & 2) == 2 ? this.f35044p.toBuilder() : null;
                                JvmMethodSignature jvmMethodSignature = (JvmMethodSignature) codedInputStream.readMessage(JvmMethodSignature.PARSER, extensionRegistryLite);
                                this.f35044p = jvmMethodSignature;
                                if (builder2 != null) {
                                    builder2.mergeFrom(jvmMethodSignature);
                                    this.f35044p = builder2.buildPartial();
                                }
                                this.f35042i |= 2;
                            } else if (readTag == 26) {
                                JvmMethodSignature.Builder builder3 = (this.f35042i & 4) == 4 ? this.f35045q.toBuilder() : null;
                                JvmMethodSignature jvmMethodSignature2 = (JvmMethodSignature) codedInputStream.readMessage(JvmMethodSignature.PARSER, extensionRegistryLite);
                                this.f35045q = jvmMethodSignature2;
                                if (builder3 != null) {
                                    builder3.mergeFrom(jvmMethodSignature2);
                                    this.f35045q = builder3.buildPartial();
                                }
                                this.f35042i |= 4;
                            } else if (readTag == 34) {
                                JvmMethodSignature.Builder builder4 = (this.f35042i & 8) == 8 ? this.f35046r.toBuilder() : null;
                                JvmMethodSignature jvmMethodSignature3 = (JvmMethodSignature) codedInputStream.readMessage(JvmMethodSignature.PARSER, extensionRegistryLite);
                                this.f35046r = jvmMethodSignature3;
                                if (builder4 != null) {
                                    builder4.mergeFrom(jvmMethodSignature3);
                                    this.f35046r = builder4.buildPartial();
                                }
                                this.f35042i |= 8;
                            } else if (readTag != 42) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                JvmMethodSignature.Builder builder5 = (this.f35042i & 16) == 16 ? this.f35047s.toBuilder() : null;
                                JvmMethodSignature jvmMethodSignature4 = (JvmMethodSignature) codedInputStream.readMessage(JvmMethodSignature.PARSER, extensionRegistryLite);
                                this.f35047s = jvmMethodSignature4;
                                if (builder5 != null) {
                                    builder5.mergeFrom(jvmMethodSignature4);
                                    this.f35047s = builder5.buildPartial();
                                }
                                this.f35042i |= 16;
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f35041e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f35041e = newOutput.toByteString();
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
                this.f35041e = newOutput.toByteString();
                throw th4;
            }
            this.f35041e = newOutput.toByteString();
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
        private static final StringTableTypes f35056s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f35057e;

        /* renamed from: i  reason: collision with root package name */
        private List f35058i;

        /* renamed from: o  reason: collision with root package name */
        private List f35059o;

        /* renamed from: p  reason: collision with root package name */
        private int f35060p;

        /* renamed from: q  reason: collision with root package name */
        private byte f35061q;

        /* renamed from: r  reason: collision with root package name */
        private int f35062r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<StringTableTypes, Builder> implements StringTableTypesOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f35063e;

            /* renamed from: i  reason: collision with root package name */
            private List f35064i;

            /* renamed from: o  reason: collision with root package name */
            private List f35065o;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f35064i = list;
                this.f35065o = list;
                f();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f35063e & 2) != 2) {
                    this.f35065o = new ArrayList(this.f35065o);
                    this.f35063e |= 2;
                }
            }

            private void e() {
                if ((this.f35063e & 1) != 1) {
                    this.f35064i = new ArrayList(this.f35064i);
                    this.f35063e |= 1;
                }
            }

            private void f() {
            }

            public StringTableTypes buildPartial() {
                StringTableTypes stringTableTypes = new StringTableTypes(this);
                if ((this.f35063e & 1) == 1) {
                    this.f35064i = Collections.unmodifiableList(this.f35064i);
                    this.f35063e &= -2;
                }
                stringTableTypes.f35058i = this.f35064i;
                if ((this.f35063e & 2) == 2) {
                    this.f35065o = Collections.unmodifiableList(this.f35065o);
                    this.f35063e &= -3;
                }
                stringTableTypes.f35059o = this.f35065o;
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
                if (!stringTableTypes.f35058i.isEmpty()) {
                    if (this.f35064i.isEmpty()) {
                        this.f35064i = stringTableTypes.f35058i;
                        this.f35063e &= -2;
                    } else {
                        e();
                        this.f35064i.addAll(stringTableTypes.f35058i);
                    }
                }
                if (!stringTableTypes.f35059o.isEmpty()) {
                    if (this.f35065o.isEmpty()) {
                        this.f35065o = stringTableTypes.f35059o;
                        this.f35063e &= -3;
                    } else {
                        d();
                        this.f35065o.addAll(stringTableTypes.f35059o);
                    }
                }
                setUnknownFields(getUnknownFields().concat(stringTableTypes.f35057e));
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
            private static final Record f35066y;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f35067e;

            /* renamed from: i  reason: collision with root package name */
            private int f35068i;

            /* renamed from: o  reason: collision with root package name */
            private int f35069o;

            /* renamed from: p  reason: collision with root package name */
            private int f35070p;

            /* renamed from: q  reason: collision with root package name */
            private Object f35071q;

            /* renamed from: r  reason: collision with root package name */
            private Operation f35072r;

            /* renamed from: s  reason: collision with root package name */
            private List f35073s;

            /* renamed from: t  reason: collision with root package name */
            private int f35074t;

            /* renamed from: u  reason: collision with root package name */
            private List f35075u;

            /* renamed from: v  reason: collision with root package name */
            private int f35076v;

            /* renamed from: w  reason: collision with root package name */
            private byte f35077w;

            /* renamed from: x  reason: collision with root package name */
            private int f35078x;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<Record, Builder> implements RecordOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f35079e;

                /* renamed from: o  reason: collision with root package name */
                private int f35081o;

                /* renamed from: r  reason: collision with root package name */
                private List f35084r;

                /* renamed from: s  reason: collision with root package name */
                private List f35085s;

                /* renamed from: i  reason: collision with root package name */
                private int f35080i = 1;

                /* renamed from: p  reason: collision with root package name */
                private Object f35082p = "";

                /* renamed from: q  reason: collision with root package name */
                private Operation f35083q = Operation.NONE;

                private Builder() {
                    List list = Collections.EMPTY_LIST;
                    this.f35084r = list;
                    this.f35085s = list;
                    f();
                }

                static /* synthetic */ Builder b() {
                    return c();
                }

                private static Builder c() {
                    return new Builder();
                }

                private void d() {
                    if ((this.f35079e & 32) != 32) {
                        this.f35085s = new ArrayList(this.f35085s);
                        this.f35079e |= 32;
                    }
                }

                private void e() {
                    if ((this.f35079e & 16) != 16) {
                        this.f35084r = new ArrayList(this.f35084r);
                        this.f35079e |= 16;
                    }
                }

                private void f() {
                }

                public Record buildPartial() {
                    Record record = new Record(this);
                    int i10 = this.f35079e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    record.f35069o = this.f35080i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    record.f35070p = this.f35081o;
                    if ((i10 & 4) == 4) {
                        i11 |= 4;
                    }
                    record.f35071q = this.f35082p;
                    if ((i10 & 8) == 8) {
                        i11 |= 8;
                    }
                    record.f35072r = this.f35083q;
                    if ((this.f35079e & 16) == 16) {
                        this.f35084r = Collections.unmodifiableList(this.f35084r);
                        this.f35079e &= -17;
                    }
                    record.f35073s = this.f35084r;
                    if ((this.f35079e & 32) == 32) {
                        this.f35085s = Collections.unmodifiableList(this.f35085s);
                        this.f35079e &= -33;
                    }
                    record.f35075u = this.f35085s;
                    record.f35068i = i11;
                    return record;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public final boolean isInitialized() {
                    return true;
                }

                public Builder setOperation(Operation operation) {
                    operation.getClass();
                    this.f35079e |= 8;
                    this.f35083q = operation;
                    return this;
                }

                public Builder setPredefinedIndex(int i10) {
                    this.f35079e |= 2;
                    this.f35081o = i10;
                    return this;
                }

                public Builder setRange(int i10) {
                    this.f35079e |= 1;
                    this.f35080i = i10;
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
                        this.f35079e |= 4;
                        this.f35082p = record.f35071q;
                    }
                    if (record.hasOperation()) {
                        setOperation(record.getOperation());
                    }
                    if (!record.f35073s.isEmpty()) {
                        if (this.f35084r.isEmpty()) {
                            this.f35084r = record.f35073s;
                            this.f35079e &= -17;
                        } else {
                            e();
                            this.f35084r.addAll(record.f35073s);
                        }
                    }
                    if (!record.f35075u.isEmpty()) {
                        if (this.f35085s.isEmpty()) {
                            this.f35085s = record.f35075u;
                            this.f35079e &= -33;
                        } else {
                            d();
                            this.f35085s.addAll(record.f35075u);
                        }
                    }
                    setUnknownFields(getUnknownFields().concat(record.f35067e));
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
                private static Internal.EnumLiteMap f35086e = new a();

                /* renamed from: d  reason: collision with root package name */
                private final int f35088d;

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
                    this.f35088d = i11;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                public final int getNumber() {
                    return this.f35088d;
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
                f35066y = record;
                record.s();
            }

            public static Record getDefaultInstance() {
                return f35066y;
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            private void s() {
                this.f35069o = 1;
                this.f35070p = 0;
                this.f35071q = "";
                this.f35072r = Operation.NONE;
                List list = Collections.EMPTY_LIST;
                this.f35073s = list;
                this.f35075u = list;
            }

            public Operation getOperation() {
                return this.f35072r;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<Record> getParserForType() {
                return PARSER;
            }

            public int getPredefinedIndex() {
                return this.f35070p;
            }

            public int getRange() {
                return this.f35069o;
            }

            public int getReplaceCharCount() {
                return this.f35075u.size();
            }

            public List<Integer> getReplaceCharList() {
                return this.f35075u;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f35078x;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f35068i & 1) == 1) {
                    i10 = CodedOutputStream.computeInt32Size(1, this.f35069o);
                } else {
                    i10 = 0;
                }
                if ((this.f35068i & 2) == 2) {
                    i10 += CodedOutputStream.computeInt32Size(2, this.f35070p);
                }
                if ((this.f35068i & 8) == 8) {
                    i10 += CodedOutputStream.computeEnumSize(3, this.f35072r.getNumber());
                }
                int i12 = 0;
                for (int i13 = 0; i13 < this.f35073s.size(); i13++) {
                    i12 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f35073s.get(i13)).intValue());
                }
                int i14 = i10 + i12;
                if (!getSubstringIndexList().isEmpty()) {
                    i14 = i14 + 1 + CodedOutputStream.computeInt32SizeNoTag(i12);
                }
                this.f35074t = i12;
                int i15 = 0;
                for (int i16 = 0; i16 < this.f35075u.size(); i16++) {
                    i15 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f35075u.get(i16)).intValue());
                }
                int i17 = i14 + i15;
                if (!getReplaceCharList().isEmpty()) {
                    i17 = i17 + 1 + CodedOutputStream.computeInt32SizeNoTag(i15);
                }
                this.f35076v = i15;
                if ((this.f35068i & 4) == 4) {
                    i17 += CodedOutputStream.computeBytesSize(6, getStringBytes());
                }
                int size = i17 + this.f35067e.size();
                this.f35078x = size;
                return size;
            }

            public String getString() {
                Object obj = this.f35071q;
                if (obj instanceof String) {
                    return (String) obj;
                }
                ByteString byteString = (ByteString) obj;
                String stringUtf8 = byteString.toStringUtf8();
                if (byteString.isValidUtf8()) {
                    this.f35071q = stringUtf8;
                }
                return stringUtf8;
            }

            public ByteString getStringBytes() {
                Object obj = this.f35071q;
                if (obj instanceof String) {
                    ByteString copyFromUtf8 = ByteString.copyFromUtf8((String) obj);
                    this.f35071q = copyFromUtf8;
                    return copyFromUtf8;
                }
                return (ByteString) obj;
            }

            public int getSubstringIndexCount() {
                return this.f35073s.size();
            }

            public List<Integer> getSubstringIndexList() {
                return this.f35073s;
            }

            public boolean hasOperation() {
                if ((this.f35068i & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasPredefinedIndex() {
                if ((this.f35068i & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasRange() {
                if ((this.f35068i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasString() {
                if ((this.f35068i & 4) == 4) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f35077w;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                this.f35077w = (byte) 1;
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f35068i & 1) == 1) {
                    codedOutputStream.writeInt32(1, this.f35069o);
                }
                if ((this.f35068i & 2) == 2) {
                    codedOutputStream.writeInt32(2, this.f35070p);
                }
                if ((this.f35068i & 8) == 8) {
                    codedOutputStream.writeEnum(3, this.f35072r.getNumber());
                }
                if (getSubstringIndexList().size() > 0) {
                    codedOutputStream.writeRawVarint32(34);
                    codedOutputStream.writeRawVarint32(this.f35074t);
                }
                for (int i10 = 0; i10 < this.f35073s.size(); i10++) {
                    codedOutputStream.writeInt32NoTag(((Integer) this.f35073s.get(i10)).intValue());
                }
                if (getReplaceCharList().size() > 0) {
                    codedOutputStream.writeRawVarint32(42);
                    codedOutputStream.writeRawVarint32(this.f35076v);
                }
                for (int i11 = 0; i11 < this.f35075u.size(); i11++) {
                    codedOutputStream.writeInt32NoTag(((Integer) this.f35075u.get(i11)).intValue());
                }
                if ((this.f35068i & 4) == 4) {
                    codedOutputStream.writeBytes(6, getStringBytes());
                }
                codedOutputStream.writeRawBytes(this.f35067e);
            }

            public static Builder newBuilder(Record record) {
                return newBuilder().mergeFrom(record);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Record getDefaultInstanceForType() {
                return f35066y;
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
                this.f35074t = -1;
                this.f35076v = -1;
                this.f35077w = (byte) -1;
                this.f35078x = -1;
                this.f35067e = builder.getUnknownFields();
            }

            private Record(boolean z10) {
                this.f35074t = -1;
                this.f35076v = -1;
                this.f35077w = (byte) -1;
                this.f35078x = -1;
                this.f35067e = ByteString.EMPTY;
            }

            private Record(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f35074t = -1;
                this.f35076v = -1;
                this.f35077w = (byte) -1;
                this.f35078x = -1;
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
                                    this.f35068i |= 1;
                                    this.f35069o = codedInputStream.readInt32();
                                } else if (readTag == 16) {
                                    this.f35068i |= 2;
                                    this.f35070p = codedInputStream.readInt32();
                                } else if (readTag == 24) {
                                    int readEnum = codedInputStream.readEnum();
                                    Operation valueOf = Operation.valueOf(readEnum);
                                    if (valueOf == null) {
                                        newInstance.writeRawVarint32(readTag);
                                        newInstance.writeRawVarint32(readEnum);
                                    } else {
                                        this.f35068i |= 8;
                                        this.f35072r = valueOf;
                                    }
                                } else if (readTag == 32) {
                                    if (!(z11 & true)) {
                                        this.f35073s = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f35073s.add(Integer.valueOf(codedInputStream.readInt32()));
                                } else if (readTag == 34) {
                                    int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f35073s = new ArrayList();
                                        z11 |= true;
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f35073s.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit);
                                } else if (readTag == 40) {
                                    if (!(z11 & true)) {
                                        this.f35075u = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f35075u.add(Integer.valueOf(codedInputStream.readInt32()));
                                } else if (readTag == 42) {
                                    int pushLimit2 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f35075u = new ArrayList();
                                        z11 |= true;
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f35075u.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit2);
                                } else if (readTag != 50) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    ByteString readBytes = codedInputStream.readBytes();
                                    this.f35068i |= 4;
                                    this.f35071q = readBytes;
                                }
                            }
                            z10 = true;
                        } catch (Throwable th2) {
                            if (z11 & true) {
                                this.f35073s = Collections.unmodifiableList(this.f35073s);
                            }
                            if (z11 & true) {
                                this.f35075u = Collections.unmodifiableList(this.f35075u);
                            }
                            try {
                                newInstance.flush();
                            } catch (IOException unused) {
                            } catch (Throwable th3) {
                                this.f35067e = newOutput.toByteString();
                                throw th3;
                            }
                            this.f35067e = newOutput.toByteString();
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
                    this.f35073s = Collections.unmodifiableList(this.f35073s);
                }
                if (z11 & true) {
                    this.f35075u = Collections.unmodifiableList(this.f35075u);
                }
                try {
                    newInstance.flush();
                } catch (IOException unused2) {
                } catch (Throwable th4) {
                    this.f35067e = newOutput.toByteString();
                    throw th4;
                }
                this.f35067e = newOutput.toByteString();
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
            f35056s = stringTableTypes;
            stringTableTypes.m();
        }

        public static StringTableTypes getDefaultInstance() {
            return f35056s;
        }

        private void m() {
            List list = Collections.EMPTY_LIST;
            this.f35058i = list;
            this.f35059o = list;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public static StringTableTypes parseDelimitedFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseDelimitedFrom(inputStream, extensionRegistryLite);
        }

        public List<Integer> getLocalNameList() {
            return this.f35059o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<StringTableTypes> getParserForType() {
            return PARSER;
        }

        public List<Record> getRecordList() {
            return this.f35058i;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f35062r;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f35058i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f35058i.get(i12));
            }
            int i13 = 0;
            for (int i14 = 0; i14 < this.f35059o.size(); i14++) {
                i13 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f35059o.get(i14)).intValue());
            }
            int i15 = i11 + i13;
            if (!getLocalNameList().isEmpty()) {
                i15 = i15 + 1 + CodedOutputStream.computeInt32SizeNoTag(i13);
            }
            this.f35060p = i13;
            int size = i15 + this.f35057e.size();
            this.f35062r = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f35061q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f35061q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f35058i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f35058i.get(i10));
            }
            if (getLocalNameList().size() > 0) {
                codedOutputStream.writeRawVarint32(42);
                codedOutputStream.writeRawVarint32(this.f35060p);
            }
            for (int i11 = 0; i11 < this.f35059o.size(); i11++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f35059o.get(i11)).intValue());
            }
            codedOutputStream.writeRawBytes(this.f35057e);
        }

        public static Builder newBuilder(StringTableTypes stringTableTypes) {
            return newBuilder().mergeFrom(stringTableTypes);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public StringTableTypes getDefaultInstanceForType() {
            return f35056s;
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
            this.f35060p = -1;
            this.f35061q = (byte) -1;
            this.f35062r = -1;
            this.f35057e = builder.getUnknownFields();
        }

        private StringTableTypes(boolean z10) {
            this.f35060p = -1;
            this.f35061q = (byte) -1;
            this.f35062r = -1;
            this.f35057e = ByteString.EMPTY;
        }

        private StringTableTypes(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f35060p = -1;
            this.f35061q = (byte) -1;
            this.f35062r = -1;
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
                                    this.f35058i = new ArrayList();
                                    z11 |= true;
                                }
                                this.f35058i.add(codedInputStream.readMessage(Record.PARSER, extensionRegistryLite));
                            } else if (readTag == 40) {
                                if (!(z11 & true)) {
                                    this.f35059o = new ArrayList();
                                    z11 |= true;
                                }
                                this.f35059o.add(Integer.valueOf(codedInputStream.readInt32()));
                            } else if (readTag != 42) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f35059o = new ArrayList();
                                    z11 |= true;
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f35059o.add(Integer.valueOf(codedInputStream.readInt32()));
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
                        this.f35058i = Collections.unmodifiableList(this.f35058i);
                    }
                    if (z11 & true) {
                        this.f35059o = Collections.unmodifiableList(this.f35059o);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f35057e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f35057e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11 & true) {
                this.f35058i = Collections.unmodifiableList(this.f35058i);
            }
            if (z11 & true) {
                this.f35059o = Collections.unmodifiableList(this.f35059o);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f35057e = newOutput.toByteString();
                throw th4;
            }
            this.f35057e = newOutput.toByteString();
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
