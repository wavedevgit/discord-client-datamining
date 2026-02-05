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
        private static final JvmFieldSignature f33710s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33711e;

        /* renamed from: i  reason: collision with root package name */
        private int f33712i;

        /* renamed from: o  reason: collision with root package name */
        private int f33713o;

        /* renamed from: p  reason: collision with root package name */
        private int f33714p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33715q;

        /* renamed from: r  reason: collision with root package name */
        private int f33716r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<JvmFieldSignature, Builder> implements JvmFieldSignatureOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33717e;

            /* renamed from: i  reason: collision with root package name */
            private int f33718i;

            /* renamed from: o  reason: collision with root package name */
            private int f33719o;

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
                int i10 = this.f33717e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                jvmFieldSignature.f33713o = this.f33718i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                jvmFieldSignature.f33714p = this.f33719o;
                jvmFieldSignature.f33712i = i11;
                return jvmFieldSignature;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            public Builder setDesc(int i10) {
                this.f33717e |= 2;
                this.f33719o = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f33717e |= 1;
                this.f33718i = i10;
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
                setUnknownFields(getUnknownFields().concat(jvmFieldSignature.f33711e));
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
            f33710s = jvmFieldSignature;
            jvmFieldSignature.l();
        }

        public static JvmFieldSignature getDefaultInstance() {
            return f33710s;
        }

        private void l() {
            this.f33713o = 0;
            this.f33714p = 0;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public int getDesc() {
            return this.f33714p;
        }

        public int getName() {
            return this.f33713o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<JvmFieldSignature> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33716r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33712i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33713o);
            } else {
                i10 = 0;
            }
            if ((this.f33712i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33714p);
            }
            int size = i10 + this.f33711e.size();
            this.f33716r = size;
            return size;
        }

        public boolean hasDesc() {
            if ((this.f33712i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f33712i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33715q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f33715q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33712i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33713o);
            }
            if ((this.f33712i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f33714p);
            }
            codedOutputStream.writeRawBytes(this.f33711e);
        }

        public static Builder newBuilder(JvmFieldSignature jvmFieldSignature) {
            return newBuilder().mergeFrom(jvmFieldSignature);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public JvmFieldSignature getDefaultInstanceForType() {
            return f33710s;
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
            this.f33715q = (byte) -1;
            this.f33716r = -1;
            this.f33711e = builder.getUnknownFields();
        }

        private JvmFieldSignature(boolean z10) {
            this.f33715q = (byte) -1;
            this.f33716r = -1;
            this.f33711e = ByteString.EMPTY;
        }

        private JvmFieldSignature(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33715q = (byte) -1;
            this.f33716r = -1;
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
                                this.f33712i |= 1;
                                this.f33713o = codedInputStream.readInt32();
                            } else if (readTag != 16) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f33712i |= 2;
                                this.f33714p = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33711e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33711e = newOutput.toByteString();
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
                this.f33711e = newOutput.toByteString();
                throw th4;
            }
            this.f33711e = newOutput.toByteString();
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
        private static final JvmMethodSignature f33720s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33721e;

        /* renamed from: i  reason: collision with root package name */
        private int f33722i;

        /* renamed from: o  reason: collision with root package name */
        private int f33723o;

        /* renamed from: p  reason: collision with root package name */
        private int f33724p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33725q;

        /* renamed from: r  reason: collision with root package name */
        private int f33726r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<JvmMethodSignature, Builder> implements JvmMethodSignatureOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33727e;

            /* renamed from: i  reason: collision with root package name */
            private int f33728i;

            /* renamed from: o  reason: collision with root package name */
            private int f33729o;

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
                int i10 = this.f33727e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                jvmMethodSignature.f33723o = this.f33728i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                jvmMethodSignature.f33724p = this.f33729o;
                jvmMethodSignature.f33722i = i11;
                return jvmMethodSignature;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            public Builder setDesc(int i10) {
                this.f33727e |= 2;
                this.f33729o = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f33727e |= 1;
                this.f33728i = i10;
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
                setUnknownFields(getUnknownFields().concat(jvmMethodSignature.f33721e));
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
            f33720s = jvmMethodSignature;
            jvmMethodSignature.l();
        }

        public static JvmMethodSignature getDefaultInstance() {
            return f33720s;
        }

        private void l() {
            this.f33723o = 0;
            this.f33724p = 0;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public int getDesc() {
            return this.f33724p;
        }

        public int getName() {
            return this.f33723o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<JvmMethodSignature> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33726r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33722i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33723o);
            } else {
                i10 = 0;
            }
            if ((this.f33722i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33724p);
            }
            int size = i10 + this.f33721e.size();
            this.f33726r = size;
            return size;
        }

        public boolean hasDesc() {
            if ((this.f33722i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f33722i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33725q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f33725q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33722i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33723o);
            }
            if ((this.f33722i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f33724p);
            }
            codedOutputStream.writeRawBytes(this.f33721e);
        }

        public static Builder newBuilder(JvmMethodSignature jvmMethodSignature) {
            return newBuilder().mergeFrom(jvmMethodSignature);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public JvmMethodSignature getDefaultInstanceForType() {
            return f33720s;
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
            this.f33725q = (byte) -1;
            this.f33726r = -1;
            this.f33721e = builder.getUnknownFields();
        }

        private JvmMethodSignature(boolean z10) {
            this.f33725q = (byte) -1;
            this.f33726r = -1;
            this.f33721e = ByteString.EMPTY;
        }

        private JvmMethodSignature(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33725q = (byte) -1;
            this.f33726r = -1;
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
                                this.f33722i |= 1;
                                this.f33723o = codedInputStream.readInt32();
                            } else if (readTag != 16) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f33722i |= 2;
                                this.f33724p = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33721e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33721e = newOutput.toByteString();
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
                this.f33721e = newOutput.toByteString();
                throw th4;
            }
            this.f33721e = newOutput.toByteString();
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
        private static final JvmPropertySignature f33730v;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33731e;

        /* renamed from: i  reason: collision with root package name */
        private int f33732i;

        /* renamed from: o  reason: collision with root package name */
        private JvmFieldSignature f33733o;

        /* renamed from: p  reason: collision with root package name */
        private JvmMethodSignature f33734p;

        /* renamed from: q  reason: collision with root package name */
        private JvmMethodSignature f33735q;

        /* renamed from: r  reason: collision with root package name */
        private JvmMethodSignature f33736r;

        /* renamed from: s  reason: collision with root package name */
        private JvmMethodSignature f33737s;

        /* renamed from: t  reason: collision with root package name */
        private byte f33738t;

        /* renamed from: u  reason: collision with root package name */
        private int f33739u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<JvmPropertySignature, Builder> implements JvmPropertySignatureOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33740e;

            /* renamed from: i  reason: collision with root package name */
            private JvmFieldSignature f33741i = JvmFieldSignature.getDefaultInstance();

            /* renamed from: o  reason: collision with root package name */
            private JvmMethodSignature f33742o = JvmMethodSignature.getDefaultInstance();

            /* renamed from: p  reason: collision with root package name */
            private JvmMethodSignature f33743p = JvmMethodSignature.getDefaultInstance();

            /* renamed from: q  reason: collision with root package name */
            private JvmMethodSignature f33744q = JvmMethodSignature.getDefaultInstance();

            /* renamed from: r  reason: collision with root package name */
            private JvmMethodSignature f33745r = JvmMethodSignature.getDefaultInstance();

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
                int i10 = this.f33740e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                jvmPropertySignature.f33733o = this.f33741i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                jvmPropertySignature.f33734p = this.f33742o;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                jvmPropertySignature.f33735q = this.f33743p;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                jvmPropertySignature.f33736r = this.f33744q;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                jvmPropertySignature.f33737s = this.f33745r;
                jvmPropertySignature.f33732i = i11;
                return jvmPropertySignature;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            public Builder mergeDelegateMethod(JvmMethodSignature jvmMethodSignature) {
                if ((this.f33740e & 16) == 16 && this.f33745r != JvmMethodSignature.getDefaultInstance()) {
                    this.f33745r = JvmMethodSignature.newBuilder(this.f33745r).mergeFrom(jvmMethodSignature).buildPartial();
                } else {
                    this.f33745r = jvmMethodSignature;
                }
                this.f33740e |= 16;
                return this;
            }

            public Builder mergeField(JvmFieldSignature jvmFieldSignature) {
                if ((this.f33740e & 1) == 1 && this.f33741i != JvmFieldSignature.getDefaultInstance()) {
                    this.f33741i = JvmFieldSignature.newBuilder(this.f33741i).mergeFrom(jvmFieldSignature).buildPartial();
                } else {
                    this.f33741i = jvmFieldSignature;
                }
                this.f33740e |= 1;
                return this;
            }

            public Builder mergeGetter(JvmMethodSignature jvmMethodSignature) {
                if ((this.f33740e & 4) == 4 && this.f33743p != JvmMethodSignature.getDefaultInstance()) {
                    this.f33743p = JvmMethodSignature.newBuilder(this.f33743p).mergeFrom(jvmMethodSignature).buildPartial();
                } else {
                    this.f33743p = jvmMethodSignature;
                }
                this.f33740e |= 4;
                return this;
            }

            public Builder mergeSetter(JvmMethodSignature jvmMethodSignature) {
                if ((this.f33740e & 8) == 8 && this.f33744q != JvmMethodSignature.getDefaultInstance()) {
                    this.f33744q = JvmMethodSignature.newBuilder(this.f33744q).mergeFrom(jvmMethodSignature).buildPartial();
                } else {
                    this.f33744q = jvmMethodSignature;
                }
                this.f33740e |= 8;
                return this;
            }

            public Builder mergeSyntheticMethod(JvmMethodSignature jvmMethodSignature) {
                if ((this.f33740e & 2) == 2 && this.f33742o != JvmMethodSignature.getDefaultInstance()) {
                    this.f33742o = JvmMethodSignature.newBuilder(this.f33742o).mergeFrom(jvmMethodSignature).buildPartial();
                } else {
                    this.f33742o = jvmMethodSignature;
                }
                this.f33740e |= 2;
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
                setUnknownFields(getUnknownFields().concat(jvmPropertySignature.f33731e));
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
            f33730v = jvmPropertySignature;
            jvmPropertySignature.o();
        }

        public static JvmPropertySignature getDefaultInstance() {
            return f33730v;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void o() {
            this.f33733o = JvmFieldSignature.getDefaultInstance();
            this.f33734p = JvmMethodSignature.getDefaultInstance();
            this.f33735q = JvmMethodSignature.getDefaultInstance();
            this.f33736r = JvmMethodSignature.getDefaultInstance();
            this.f33737s = JvmMethodSignature.getDefaultInstance();
        }

        public JvmMethodSignature getDelegateMethod() {
            return this.f33737s;
        }

        public JvmFieldSignature getField() {
            return this.f33733o;
        }

        public JvmMethodSignature getGetter() {
            return this.f33735q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<JvmPropertySignature> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33739u;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33732i & 1) == 1) {
                i10 = CodedOutputStream.computeMessageSize(1, this.f33733o);
            } else {
                i10 = 0;
            }
            if ((this.f33732i & 2) == 2) {
                i10 += CodedOutputStream.computeMessageSize(2, this.f33734p);
            }
            if ((this.f33732i & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f33735q);
            }
            if ((this.f33732i & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f33736r);
            }
            if ((this.f33732i & 16) == 16) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f33737s);
            }
            int size = i10 + this.f33731e.size();
            this.f33739u = size;
            return size;
        }

        public JvmMethodSignature getSetter() {
            return this.f33736r;
        }

        public JvmMethodSignature getSyntheticMethod() {
            return this.f33734p;
        }

        public boolean hasDelegateMethod() {
            if ((this.f33732i & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasField() {
            if ((this.f33732i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasGetter() {
            if ((this.f33732i & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasSetter() {
            if ((this.f33732i & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasSyntheticMethod() {
            if ((this.f33732i & 2) == 2) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33738t;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f33738t = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33732i & 1) == 1) {
                codedOutputStream.writeMessage(1, this.f33733o);
            }
            if ((this.f33732i & 2) == 2) {
                codedOutputStream.writeMessage(2, this.f33734p);
            }
            if ((this.f33732i & 4) == 4) {
                codedOutputStream.writeMessage(3, this.f33735q);
            }
            if ((this.f33732i & 8) == 8) {
                codedOutputStream.writeMessage(4, this.f33736r);
            }
            if ((this.f33732i & 16) == 16) {
                codedOutputStream.writeMessage(5, this.f33737s);
            }
            codedOutputStream.writeRawBytes(this.f33731e);
        }

        public static Builder newBuilder(JvmPropertySignature jvmPropertySignature) {
            return newBuilder().mergeFrom(jvmPropertySignature);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public JvmPropertySignature getDefaultInstanceForType() {
            return f33730v;
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
            this.f33738t = (byte) -1;
            this.f33739u = -1;
            this.f33731e = builder.getUnknownFields();
        }

        private JvmPropertySignature(boolean z10) {
            this.f33738t = (byte) -1;
            this.f33739u = -1;
            this.f33731e = ByteString.EMPTY;
        }

        private JvmPropertySignature(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33738t = (byte) -1;
            this.f33739u = -1;
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
                                JvmFieldSignature.Builder builder = (this.f33732i & 1) == 1 ? this.f33733o.toBuilder() : null;
                                JvmFieldSignature jvmFieldSignature = (JvmFieldSignature) codedInputStream.readMessage(JvmFieldSignature.PARSER, extensionRegistryLite);
                                this.f33733o = jvmFieldSignature;
                                if (builder != null) {
                                    builder.mergeFrom(jvmFieldSignature);
                                    this.f33733o = builder.buildPartial();
                                }
                                this.f33732i |= 1;
                            } else if (readTag == 18) {
                                JvmMethodSignature.Builder builder2 = (this.f33732i & 2) == 2 ? this.f33734p.toBuilder() : null;
                                JvmMethodSignature jvmMethodSignature = (JvmMethodSignature) codedInputStream.readMessage(JvmMethodSignature.PARSER, extensionRegistryLite);
                                this.f33734p = jvmMethodSignature;
                                if (builder2 != null) {
                                    builder2.mergeFrom(jvmMethodSignature);
                                    this.f33734p = builder2.buildPartial();
                                }
                                this.f33732i |= 2;
                            } else if (readTag == 26) {
                                JvmMethodSignature.Builder builder3 = (this.f33732i & 4) == 4 ? this.f33735q.toBuilder() : null;
                                JvmMethodSignature jvmMethodSignature2 = (JvmMethodSignature) codedInputStream.readMessage(JvmMethodSignature.PARSER, extensionRegistryLite);
                                this.f33735q = jvmMethodSignature2;
                                if (builder3 != null) {
                                    builder3.mergeFrom(jvmMethodSignature2);
                                    this.f33735q = builder3.buildPartial();
                                }
                                this.f33732i |= 4;
                            } else if (readTag == 34) {
                                JvmMethodSignature.Builder builder4 = (this.f33732i & 8) == 8 ? this.f33736r.toBuilder() : null;
                                JvmMethodSignature jvmMethodSignature3 = (JvmMethodSignature) codedInputStream.readMessage(JvmMethodSignature.PARSER, extensionRegistryLite);
                                this.f33736r = jvmMethodSignature3;
                                if (builder4 != null) {
                                    builder4.mergeFrom(jvmMethodSignature3);
                                    this.f33736r = builder4.buildPartial();
                                }
                                this.f33732i |= 8;
                            } else if (readTag != 42) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                JvmMethodSignature.Builder builder5 = (this.f33732i & 16) == 16 ? this.f33737s.toBuilder() : null;
                                JvmMethodSignature jvmMethodSignature4 = (JvmMethodSignature) codedInputStream.readMessage(JvmMethodSignature.PARSER, extensionRegistryLite);
                                this.f33737s = jvmMethodSignature4;
                                if (builder5 != null) {
                                    builder5.mergeFrom(jvmMethodSignature4);
                                    this.f33737s = builder5.buildPartial();
                                }
                                this.f33732i |= 16;
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33731e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33731e = newOutput.toByteString();
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
                this.f33731e = newOutput.toByteString();
                throw th4;
            }
            this.f33731e = newOutput.toByteString();
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
        private static final StringTableTypes f33746s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33747e;

        /* renamed from: i  reason: collision with root package name */
        private List f33748i;

        /* renamed from: o  reason: collision with root package name */
        private List f33749o;

        /* renamed from: p  reason: collision with root package name */
        private int f33750p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33751q;

        /* renamed from: r  reason: collision with root package name */
        private int f33752r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<StringTableTypes, Builder> implements StringTableTypesOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33753e;

            /* renamed from: i  reason: collision with root package name */
            private List f33754i;

            /* renamed from: o  reason: collision with root package name */
            private List f33755o;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33754i = list;
                this.f33755o = list;
                f();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f33753e & 2) != 2) {
                    this.f33755o = new ArrayList(this.f33755o);
                    this.f33753e |= 2;
                }
            }

            private void e() {
                if ((this.f33753e & 1) != 1) {
                    this.f33754i = new ArrayList(this.f33754i);
                    this.f33753e |= 1;
                }
            }

            private void f() {
            }

            public StringTableTypes buildPartial() {
                StringTableTypes stringTableTypes = new StringTableTypes(this);
                if ((this.f33753e & 1) == 1) {
                    this.f33754i = Collections.unmodifiableList(this.f33754i);
                    this.f33753e &= -2;
                }
                stringTableTypes.f33748i = this.f33754i;
                if ((this.f33753e & 2) == 2) {
                    this.f33755o = Collections.unmodifiableList(this.f33755o);
                    this.f33753e &= -3;
                }
                stringTableTypes.f33749o = this.f33755o;
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
                if (!stringTableTypes.f33748i.isEmpty()) {
                    if (this.f33754i.isEmpty()) {
                        this.f33754i = stringTableTypes.f33748i;
                        this.f33753e &= -2;
                    } else {
                        e();
                        this.f33754i.addAll(stringTableTypes.f33748i);
                    }
                }
                if (!stringTableTypes.f33749o.isEmpty()) {
                    if (this.f33755o.isEmpty()) {
                        this.f33755o = stringTableTypes.f33749o;
                        this.f33753e &= -3;
                    } else {
                        d();
                        this.f33755o.addAll(stringTableTypes.f33749o);
                    }
                }
                setUnknownFields(getUnknownFields().concat(stringTableTypes.f33747e));
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
            private static final Record f33756y;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f33757e;

            /* renamed from: i  reason: collision with root package name */
            private int f33758i;

            /* renamed from: o  reason: collision with root package name */
            private int f33759o;

            /* renamed from: p  reason: collision with root package name */
            private int f33760p;

            /* renamed from: q  reason: collision with root package name */
            private Object f33761q;

            /* renamed from: r  reason: collision with root package name */
            private Operation f33762r;

            /* renamed from: s  reason: collision with root package name */
            private List f33763s;

            /* renamed from: t  reason: collision with root package name */
            private int f33764t;

            /* renamed from: u  reason: collision with root package name */
            private List f33765u;

            /* renamed from: v  reason: collision with root package name */
            private int f33766v;

            /* renamed from: w  reason: collision with root package name */
            private byte f33767w;

            /* renamed from: x  reason: collision with root package name */
            private int f33768x;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<Record, Builder> implements RecordOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f33769e;

                /* renamed from: o  reason: collision with root package name */
                private int f33771o;

                /* renamed from: r  reason: collision with root package name */
                private List f33774r;

                /* renamed from: s  reason: collision with root package name */
                private List f33775s;

                /* renamed from: i  reason: collision with root package name */
                private int f33770i = 1;

                /* renamed from: p  reason: collision with root package name */
                private Object f33772p = "";

                /* renamed from: q  reason: collision with root package name */
                private Operation f33773q = Operation.NONE;

                private Builder() {
                    List list = Collections.EMPTY_LIST;
                    this.f33774r = list;
                    this.f33775s = list;
                    f();
                }

                static /* synthetic */ Builder b() {
                    return c();
                }

                private static Builder c() {
                    return new Builder();
                }

                private void d() {
                    if ((this.f33769e & 32) != 32) {
                        this.f33775s = new ArrayList(this.f33775s);
                        this.f33769e |= 32;
                    }
                }

                private void e() {
                    if ((this.f33769e & 16) != 16) {
                        this.f33774r = new ArrayList(this.f33774r);
                        this.f33769e |= 16;
                    }
                }

                private void f() {
                }

                public Record buildPartial() {
                    Record record = new Record(this);
                    int i10 = this.f33769e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    record.f33759o = this.f33770i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    record.f33760p = this.f33771o;
                    if ((i10 & 4) == 4) {
                        i11 |= 4;
                    }
                    record.f33761q = this.f33772p;
                    if ((i10 & 8) == 8) {
                        i11 |= 8;
                    }
                    record.f33762r = this.f33773q;
                    if ((this.f33769e & 16) == 16) {
                        this.f33774r = Collections.unmodifiableList(this.f33774r);
                        this.f33769e &= -17;
                    }
                    record.f33763s = this.f33774r;
                    if ((this.f33769e & 32) == 32) {
                        this.f33775s = Collections.unmodifiableList(this.f33775s);
                        this.f33769e &= -33;
                    }
                    record.f33765u = this.f33775s;
                    record.f33758i = i11;
                    return record;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public final boolean isInitialized() {
                    return true;
                }

                public Builder setOperation(Operation operation) {
                    operation.getClass();
                    this.f33769e |= 8;
                    this.f33773q = operation;
                    return this;
                }

                public Builder setPredefinedIndex(int i10) {
                    this.f33769e |= 2;
                    this.f33771o = i10;
                    return this;
                }

                public Builder setRange(int i10) {
                    this.f33769e |= 1;
                    this.f33770i = i10;
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
                        this.f33769e |= 4;
                        this.f33772p = record.f33761q;
                    }
                    if (record.hasOperation()) {
                        setOperation(record.getOperation());
                    }
                    if (!record.f33763s.isEmpty()) {
                        if (this.f33774r.isEmpty()) {
                            this.f33774r = record.f33763s;
                            this.f33769e &= -17;
                        } else {
                            e();
                            this.f33774r.addAll(record.f33763s);
                        }
                    }
                    if (!record.f33765u.isEmpty()) {
                        if (this.f33775s.isEmpty()) {
                            this.f33775s = record.f33765u;
                            this.f33769e &= -33;
                        } else {
                            d();
                            this.f33775s.addAll(record.f33765u);
                        }
                    }
                    setUnknownFields(getUnknownFields().concat(record.f33757e));
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
                private static Internal.EnumLiteMap f33776e = new a();

                /* renamed from: d  reason: collision with root package name */
                private final int f33778d;

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
                    this.f33778d = i11;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                public final int getNumber() {
                    return this.f33778d;
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
                f33756y = record;
                record.s();
            }

            public static Record getDefaultInstance() {
                return f33756y;
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            private void s() {
                this.f33759o = 1;
                this.f33760p = 0;
                this.f33761q = "";
                this.f33762r = Operation.NONE;
                List list = Collections.EMPTY_LIST;
                this.f33763s = list;
                this.f33765u = list;
            }

            public Operation getOperation() {
                return this.f33762r;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<Record> getParserForType() {
                return PARSER;
            }

            public int getPredefinedIndex() {
                return this.f33760p;
            }

            public int getRange() {
                return this.f33759o;
            }

            public int getReplaceCharCount() {
                return this.f33765u.size();
            }

            public List<Integer> getReplaceCharList() {
                return this.f33765u;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f33768x;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f33758i & 1) == 1) {
                    i10 = CodedOutputStream.computeInt32Size(1, this.f33759o);
                } else {
                    i10 = 0;
                }
                if ((this.f33758i & 2) == 2) {
                    i10 += CodedOutputStream.computeInt32Size(2, this.f33760p);
                }
                if ((this.f33758i & 8) == 8) {
                    i10 += CodedOutputStream.computeEnumSize(3, this.f33762r.getNumber());
                }
                int i12 = 0;
                for (int i13 = 0; i13 < this.f33763s.size(); i13++) {
                    i12 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33763s.get(i13)).intValue());
                }
                int i14 = i10 + i12;
                if (!getSubstringIndexList().isEmpty()) {
                    i14 = i14 + 1 + CodedOutputStream.computeInt32SizeNoTag(i12);
                }
                this.f33764t = i12;
                int i15 = 0;
                for (int i16 = 0; i16 < this.f33765u.size(); i16++) {
                    i15 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33765u.get(i16)).intValue());
                }
                int i17 = i14 + i15;
                if (!getReplaceCharList().isEmpty()) {
                    i17 = i17 + 1 + CodedOutputStream.computeInt32SizeNoTag(i15);
                }
                this.f33766v = i15;
                if ((this.f33758i & 4) == 4) {
                    i17 += CodedOutputStream.computeBytesSize(6, getStringBytes());
                }
                int size = i17 + this.f33757e.size();
                this.f33768x = size;
                return size;
            }

            public String getString() {
                Object obj = this.f33761q;
                if (obj instanceof String) {
                    return (String) obj;
                }
                ByteString byteString = (ByteString) obj;
                String stringUtf8 = byteString.toStringUtf8();
                if (byteString.isValidUtf8()) {
                    this.f33761q = stringUtf8;
                }
                return stringUtf8;
            }

            public ByteString getStringBytes() {
                Object obj = this.f33761q;
                if (obj instanceof String) {
                    ByteString copyFromUtf8 = ByteString.copyFromUtf8((String) obj);
                    this.f33761q = copyFromUtf8;
                    return copyFromUtf8;
                }
                return (ByteString) obj;
            }

            public int getSubstringIndexCount() {
                return this.f33763s.size();
            }

            public List<Integer> getSubstringIndexList() {
                return this.f33763s;
            }

            public boolean hasOperation() {
                if ((this.f33758i & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasPredefinedIndex() {
                if ((this.f33758i & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasRange() {
                if ((this.f33758i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasString() {
                if ((this.f33758i & 4) == 4) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f33767w;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                this.f33767w = (byte) 1;
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f33758i & 1) == 1) {
                    codedOutputStream.writeInt32(1, this.f33759o);
                }
                if ((this.f33758i & 2) == 2) {
                    codedOutputStream.writeInt32(2, this.f33760p);
                }
                if ((this.f33758i & 8) == 8) {
                    codedOutputStream.writeEnum(3, this.f33762r.getNumber());
                }
                if (getSubstringIndexList().size() > 0) {
                    codedOutputStream.writeRawVarint32(34);
                    codedOutputStream.writeRawVarint32(this.f33764t);
                }
                for (int i10 = 0; i10 < this.f33763s.size(); i10++) {
                    codedOutputStream.writeInt32NoTag(((Integer) this.f33763s.get(i10)).intValue());
                }
                if (getReplaceCharList().size() > 0) {
                    codedOutputStream.writeRawVarint32(42);
                    codedOutputStream.writeRawVarint32(this.f33766v);
                }
                for (int i11 = 0; i11 < this.f33765u.size(); i11++) {
                    codedOutputStream.writeInt32NoTag(((Integer) this.f33765u.get(i11)).intValue());
                }
                if ((this.f33758i & 4) == 4) {
                    codedOutputStream.writeBytes(6, getStringBytes());
                }
                codedOutputStream.writeRawBytes(this.f33757e);
            }

            public static Builder newBuilder(Record record) {
                return newBuilder().mergeFrom(record);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Record getDefaultInstanceForType() {
                return f33756y;
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
                this.f33764t = -1;
                this.f33766v = -1;
                this.f33767w = (byte) -1;
                this.f33768x = -1;
                this.f33757e = builder.getUnknownFields();
            }

            private Record(boolean z10) {
                this.f33764t = -1;
                this.f33766v = -1;
                this.f33767w = (byte) -1;
                this.f33768x = -1;
                this.f33757e = ByteString.EMPTY;
            }

            private Record(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f33764t = -1;
                this.f33766v = -1;
                this.f33767w = (byte) -1;
                this.f33768x = -1;
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
                                    this.f33758i |= 1;
                                    this.f33759o = codedInputStream.readInt32();
                                } else if (readTag == 16) {
                                    this.f33758i |= 2;
                                    this.f33760p = codedInputStream.readInt32();
                                } else if (readTag == 24) {
                                    int readEnum = codedInputStream.readEnum();
                                    Operation valueOf = Operation.valueOf(readEnum);
                                    if (valueOf == null) {
                                        newInstance.writeRawVarint32(readTag);
                                        newInstance.writeRawVarint32(readEnum);
                                    } else {
                                        this.f33758i |= 8;
                                        this.f33762r = valueOf;
                                    }
                                } else if (readTag == 32) {
                                    if (!(z11 & true)) {
                                        this.f33763s = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f33763s.add(Integer.valueOf(codedInputStream.readInt32()));
                                } else if (readTag == 34) {
                                    int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33763s = new ArrayList();
                                        z11 |= true;
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33763s.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit);
                                } else if (readTag == 40) {
                                    if (!(z11 & true)) {
                                        this.f33765u = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f33765u.add(Integer.valueOf(codedInputStream.readInt32()));
                                } else if (readTag == 42) {
                                    int pushLimit2 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33765u = new ArrayList();
                                        z11 |= true;
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33765u.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit2);
                                } else if (readTag != 50) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    ByteString readBytes = codedInputStream.readBytes();
                                    this.f33758i |= 4;
                                    this.f33761q = readBytes;
                                }
                            }
                            z10 = true;
                        } catch (Throwable th2) {
                            if (z11 & true) {
                                this.f33763s = Collections.unmodifiableList(this.f33763s);
                            }
                            if (z11 & true) {
                                this.f33765u = Collections.unmodifiableList(this.f33765u);
                            }
                            try {
                                newInstance.flush();
                            } catch (IOException unused) {
                            } catch (Throwable th3) {
                                this.f33757e = newOutput.toByteString();
                                throw th3;
                            }
                            this.f33757e = newOutput.toByteString();
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
                    this.f33763s = Collections.unmodifiableList(this.f33763s);
                }
                if (z11 & true) {
                    this.f33765u = Collections.unmodifiableList(this.f33765u);
                }
                try {
                    newInstance.flush();
                } catch (IOException unused2) {
                } catch (Throwable th4) {
                    this.f33757e = newOutput.toByteString();
                    throw th4;
                }
                this.f33757e = newOutput.toByteString();
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
            f33746s = stringTableTypes;
            stringTableTypes.m();
        }

        public static StringTableTypes getDefaultInstance() {
            return f33746s;
        }

        private void m() {
            List list = Collections.EMPTY_LIST;
            this.f33748i = list;
            this.f33749o = list;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public static StringTableTypes parseDelimitedFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseDelimitedFrom(inputStream, extensionRegistryLite);
        }

        public List<Integer> getLocalNameList() {
            return this.f33749o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<StringTableTypes> getParserForType() {
            return PARSER;
        }

        public List<Record> getRecordList() {
            return this.f33748i;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f33752r;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33748i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f33748i.get(i12));
            }
            int i13 = 0;
            for (int i14 = 0; i14 < this.f33749o.size(); i14++) {
                i13 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33749o.get(i14)).intValue());
            }
            int i15 = i11 + i13;
            if (!getLocalNameList().isEmpty()) {
                i15 = i15 + 1 + CodedOutputStream.computeInt32SizeNoTag(i13);
            }
            this.f33750p = i13;
            int size = i15 + this.f33747e.size();
            this.f33752r = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33751q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f33751q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f33748i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f33748i.get(i10));
            }
            if (getLocalNameList().size() > 0) {
                codedOutputStream.writeRawVarint32(42);
                codedOutputStream.writeRawVarint32(this.f33750p);
            }
            for (int i11 = 0; i11 < this.f33749o.size(); i11++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33749o.get(i11)).intValue());
            }
            codedOutputStream.writeRawBytes(this.f33747e);
        }

        public static Builder newBuilder(StringTableTypes stringTableTypes) {
            return newBuilder().mergeFrom(stringTableTypes);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public StringTableTypes getDefaultInstanceForType() {
            return f33746s;
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
            this.f33750p = -1;
            this.f33751q = (byte) -1;
            this.f33752r = -1;
            this.f33747e = builder.getUnknownFields();
        }

        private StringTableTypes(boolean z10) {
            this.f33750p = -1;
            this.f33751q = (byte) -1;
            this.f33752r = -1;
            this.f33747e = ByteString.EMPTY;
        }

        private StringTableTypes(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33750p = -1;
            this.f33751q = (byte) -1;
            this.f33752r = -1;
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
                                    this.f33748i = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33748i.add(codedInputStream.readMessage(Record.PARSER, extensionRegistryLite));
                            } else if (readTag == 40) {
                                if (!(z11 & true)) {
                                    this.f33749o = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33749o.add(Integer.valueOf(codedInputStream.readInt32()));
                            } else if (readTag != 42) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33749o = new ArrayList();
                                    z11 |= true;
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33749o.add(Integer.valueOf(codedInputStream.readInt32()));
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
                        this.f33748i = Collections.unmodifiableList(this.f33748i);
                    }
                    if (z11 & true) {
                        this.f33749o = Collections.unmodifiableList(this.f33749o);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33747e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33747e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11 & true) {
                this.f33748i = Collections.unmodifiableList(this.f33748i);
            }
            if (z11 & true) {
                this.f33749o = Collections.unmodifiableList(this.f33749o);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33747e = newOutput.toByteString();
                throw th4;
            }
            this.f33747e = newOutput.toByteString();
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
