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
        private static final JvmFieldSignature f34278s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34279e;

        /* renamed from: i  reason: collision with root package name */
        private int f34280i;

        /* renamed from: o  reason: collision with root package name */
        private int f34281o;

        /* renamed from: p  reason: collision with root package name */
        private int f34282p;

        /* renamed from: q  reason: collision with root package name */
        private byte f34283q;

        /* renamed from: r  reason: collision with root package name */
        private int f34284r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<JvmFieldSignature, Builder> implements JvmFieldSignatureOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34285e;

            /* renamed from: i  reason: collision with root package name */
            private int f34286i;

            /* renamed from: o  reason: collision with root package name */
            private int f34287o;

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
                int i10 = this.f34285e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                jvmFieldSignature.f34281o = this.f34286i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                jvmFieldSignature.f34282p = this.f34287o;
                jvmFieldSignature.f34280i = i11;
                return jvmFieldSignature;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            public Builder setDesc(int i10) {
                this.f34285e |= 2;
                this.f34287o = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f34285e |= 1;
                this.f34286i = i10;
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
                setUnknownFields(getUnknownFields().concat(jvmFieldSignature.f34279e));
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
            f34278s = jvmFieldSignature;
            jvmFieldSignature.l();
        }

        public static JvmFieldSignature getDefaultInstance() {
            return f34278s;
        }

        private void l() {
            this.f34281o = 0;
            this.f34282p = 0;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public int getDesc() {
            return this.f34282p;
        }

        public int getName() {
            return this.f34281o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<JvmFieldSignature> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34284r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34280i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34281o);
            } else {
                i10 = 0;
            }
            if ((this.f34280i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34282p);
            }
            int size = i10 + this.f34279e.size();
            this.f34284r = size;
            return size;
        }

        public boolean hasDesc() {
            if ((this.f34280i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f34280i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34283q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f34283q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f34280i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34281o);
            }
            if ((this.f34280i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f34282p);
            }
            codedOutputStream.writeRawBytes(this.f34279e);
        }

        public static Builder newBuilder(JvmFieldSignature jvmFieldSignature) {
            return newBuilder().mergeFrom(jvmFieldSignature);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public JvmFieldSignature getDefaultInstanceForType() {
            return f34278s;
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
            this.f34283q = (byte) -1;
            this.f34284r = -1;
            this.f34279e = builder.getUnknownFields();
        }

        private JvmFieldSignature(boolean z10) {
            this.f34283q = (byte) -1;
            this.f34284r = -1;
            this.f34279e = ByteString.EMPTY;
        }

        private JvmFieldSignature(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34283q = (byte) -1;
            this.f34284r = -1;
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
                                this.f34280i |= 1;
                                this.f34281o = codedInputStream.readInt32();
                            } else if (readTag != 16) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f34280i |= 2;
                                this.f34282p = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34279e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34279e = newOutput.toByteString();
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
                this.f34279e = newOutput.toByteString();
                throw th4;
            }
            this.f34279e = newOutput.toByteString();
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
        private static final JvmMethodSignature f34288s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34289e;

        /* renamed from: i  reason: collision with root package name */
        private int f34290i;

        /* renamed from: o  reason: collision with root package name */
        private int f34291o;

        /* renamed from: p  reason: collision with root package name */
        private int f34292p;

        /* renamed from: q  reason: collision with root package name */
        private byte f34293q;

        /* renamed from: r  reason: collision with root package name */
        private int f34294r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<JvmMethodSignature, Builder> implements JvmMethodSignatureOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34295e;

            /* renamed from: i  reason: collision with root package name */
            private int f34296i;

            /* renamed from: o  reason: collision with root package name */
            private int f34297o;

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
                int i10 = this.f34295e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                jvmMethodSignature.f34291o = this.f34296i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                jvmMethodSignature.f34292p = this.f34297o;
                jvmMethodSignature.f34290i = i11;
                return jvmMethodSignature;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            public Builder setDesc(int i10) {
                this.f34295e |= 2;
                this.f34297o = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f34295e |= 1;
                this.f34296i = i10;
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
                setUnknownFields(getUnknownFields().concat(jvmMethodSignature.f34289e));
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
            f34288s = jvmMethodSignature;
            jvmMethodSignature.l();
        }

        public static JvmMethodSignature getDefaultInstance() {
            return f34288s;
        }

        private void l() {
            this.f34291o = 0;
            this.f34292p = 0;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public int getDesc() {
            return this.f34292p;
        }

        public int getName() {
            return this.f34291o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<JvmMethodSignature> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34294r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34290i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34291o);
            } else {
                i10 = 0;
            }
            if ((this.f34290i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34292p);
            }
            int size = i10 + this.f34289e.size();
            this.f34294r = size;
            return size;
        }

        public boolean hasDesc() {
            if ((this.f34290i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f34290i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34293q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f34293q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f34290i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34291o);
            }
            if ((this.f34290i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f34292p);
            }
            codedOutputStream.writeRawBytes(this.f34289e);
        }

        public static Builder newBuilder(JvmMethodSignature jvmMethodSignature) {
            return newBuilder().mergeFrom(jvmMethodSignature);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public JvmMethodSignature getDefaultInstanceForType() {
            return f34288s;
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
            this.f34293q = (byte) -1;
            this.f34294r = -1;
            this.f34289e = builder.getUnknownFields();
        }

        private JvmMethodSignature(boolean z10) {
            this.f34293q = (byte) -1;
            this.f34294r = -1;
            this.f34289e = ByteString.EMPTY;
        }

        private JvmMethodSignature(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34293q = (byte) -1;
            this.f34294r = -1;
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
                                this.f34290i |= 1;
                                this.f34291o = codedInputStream.readInt32();
                            } else if (readTag != 16) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f34290i |= 2;
                                this.f34292p = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34289e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34289e = newOutput.toByteString();
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
                this.f34289e = newOutput.toByteString();
                throw th4;
            }
            this.f34289e = newOutput.toByteString();
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
        private static final JvmPropertySignature f34298v;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34299e;

        /* renamed from: i  reason: collision with root package name */
        private int f34300i;

        /* renamed from: o  reason: collision with root package name */
        private JvmFieldSignature f34301o;

        /* renamed from: p  reason: collision with root package name */
        private JvmMethodSignature f34302p;

        /* renamed from: q  reason: collision with root package name */
        private JvmMethodSignature f34303q;

        /* renamed from: r  reason: collision with root package name */
        private JvmMethodSignature f34304r;

        /* renamed from: s  reason: collision with root package name */
        private JvmMethodSignature f34305s;

        /* renamed from: t  reason: collision with root package name */
        private byte f34306t;

        /* renamed from: u  reason: collision with root package name */
        private int f34307u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<JvmPropertySignature, Builder> implements JvmPropertySignatureOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34308e;

            /* renamed from: i  reason: collision with root package name */
            private JvmFieldSignature f34309i = JvmFieldSignature.getDefaultInstance();

            /* renamed from: o  reason: collision with root package name */
            private JvmMethodSignature f34310o = JvmMethodSignature.getDefaultInstance();

            /* renamed from: p  reason: collision with root package name */
            private JvmMethodSignature f34311p = JvmMethodSignature.getDefaultInstance();

            /* renamed from: q  reason: collision with root package name */
            private JvmMethodSignature f34312q = JvmMethodSignature.getDefaultInstance();

            /* renamed from: r  reason: collision with root package name */
            private JvmMethodSignature f34313r = JvmMethodSignature.getDefaultInstance();

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
                int i10 = this.f34308e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                jvmPropertySignature.f34301o = this.f34309i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                jvmPropertySignature.f34302p = this.f34310o;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                jvmPropertySignature.f34303q = this.f34311p;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                jvmPropertySignature.f34304r = this.f34312q;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                jvmPropertySignature.f34305s = this.f34313r;
                jvmPropertySignature.f34300i = i11;
                return jvmPropertySignature;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            public Builder mergeDelegateMethod(JvmMethodSignature jvmMethodSignature) {
                if ((this.f34308e & 16) == 16 && this.f34313r != JvmMethodSignature.getDefaultInstance()) {
                    this.f34313r = JvmMethodSignature.newBuilder(this.f34313r).mergeFrom(jvmMethodSignature).buildPartial();
                } else {
                    this.f34313r = jvmMethodSignature;
                }
                this.f34308e |= 16;
                return this;
            }

            public Builder mergeField(JvmFieldSignature jvmFieldSignature) {
                if ((this.f34308e & 1) == 1 && this.f34309i != JvmFieldSignature.getDefaultInstance()) {
                    this.f34309i = JvmFieldSignature.newBuilder(this.f34309i).mergeFrom(jvmFieldSignature).buildPartial();
                } else {
                    this.f34309i = jvmFieldSignature;
                }
                this.f34308e |= 1;
                return this;
            }

            public Builder mergeGetter(JvmMethodSignature jvmMethodSignature) {
                if ((this.f34308e & 4) == 4 && this.f34311p != JvmMethodSignature.getDefaultInstance()) {
                    this.f34311p = JvmMethodSignature.newBuilder(this.f34311p).mergeFrom(jvmMethodSignature).buildPartial();
                } else {
                    this.f34311p = jvmMethodSignature;
                }
                this.f34308e |= 4;
                return this;
            }

            public Builder mergeSetter(JvmMethodSignature jvmMethodSignature) {
                if ((this.f34308e & 8) == 8 && this.f34312q != JvmMethodSignature.getDefaultInstance()) {
                    this.f34312q = JvmMethodSignature.newBuilder(this.f34312q).mergeFrom(jvmMethodSignature).buildPartial();
                } else {
                    this.f34312q = jvmMethodSignature;
                }
                this.f34308e |= 8;
                return this;
            }

            public Builder mergeSyntheticMethod(JvmMethodSignature jvmMethodSignature) {
                if ((this.f34308e & 2) == 2 && this.f34310o != JvmMethodSignature.getDefaultInstance()) {
                    this.f34310o = JvmMethodSignature.newBuilder(this.f34310o).mergeFrom(jvmMethodSignature).buildPartial();
                } else {
                    this.f34310o = jvmMethodSignature;
                }
                this.f34308e |= 2;
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
                setUnknownFields(getUnknownFields().concat(jvmPropertySignature.f34299e));
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
            f34298v = jvmPropertySignature;
            jvmPropertySignature.o();
        }

        public static JvmPropertySignature getDefaultInstance() {
            return f34298v;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void o() {
            this.f34301o = JvmFieldSignature.getDefaultInstance();
            this.f34302p = JvmMethodSignature.getDefaultInstance();
            this.f34303q = JvmMethodSignature.getDefaultInstance();
            this.f34304r = JvmMethodSignature.getDefaultInstance();
            this.f34305s = JvmMethodSignature.getDefaultInstance();
        }

        public JvmMethodSignature getDelegateMethod() {
            return this.f34305s;
        }

        public JvmFieldSignature getField() {
            return this.f34301o;
        }

        public JvmMethodSignature getGetter() {
            return this.f34303q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<JvmPropertySignature> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34307u;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34300i & 1) == 1) {
                i10 = CodedOutputStream.computeMessageSize(1, this.f34301o);
            } else {
                i10 = 0;
            }
            if ((this.f34300i & 2) == 2) {
                i10 += CodedOutputStream.computeMessageSize(2, this.f34302p);
            }
            if ((this.f34300i & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f34303q);
            }
            if ((this.f34300i & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f34304r);
            }
            if ((this.f34300i & 16) == 16) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f34305s);
            }
            int size = i10 + this.f34299e.size();
            this.f34307u = size;
            return size;
        }

        public JvmMethodSignature getSetter() {
            return this.f34304r;
        }

        public JvmMethodSignature getSyntheticMethod() {
            return this.f34302p;
        }

        public boolean hasDelegateMethod() {
            if ((this.f34300i & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasField() {
            if ((this.f34300i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasGetter() {
            if ((this.f34300i & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasSetter() {
            if ((this.f34300i & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasSyntheticMethod() {
            if ((this.f34300i & 2) == 2) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34306t;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f34306t = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f34300i & 1) == 1) {
                codedOutputStream.writeMessage(1, this.f34301o);
            }
            if ((this.f34300i & 2) == 2) {
                codedOutputStream.writeMessage(2, this.f34302p);
            }
            if ((this.f34300i & 4) == 4) {
                codedOutputStream.writeMessage(3, this.f34303q);
            }
            if ((this.f34300i & 8) == 8) {
                codedOutputStream.writeMessage(4, this.f34304r);
            }
            if ((this.f34300i & 16) == 16) {
                codedOutputStream.writeMessage(5, this.f34305s);
            }
            codedOutputStream.writeRawBytes(this.f34299e);
        }

        public static Builder newBuilder(JvmPropertySignature jvmPropertySignature) {
            return newBuilder().mergeFrom(jvmPropertySignature);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public JvmPropertySignature getDefaultInstanceForType() {
            return f34298v;
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
            this.f34306t = (byte) -1;
            this.f34307u = -1;
            this.f34299e = builder.getUnknownFields();
        }

        private JvmPropertySignature(boolean z10) {
            this.f34306t = (byte) -1;
            this.f34307u = -1;
            this.f34299e = ByteString.EMPTY;
        }

        private JvmPropertySignature(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34306t = (byte) -1;
            this.f34307u = -1;
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
                                JvmFieldSignature.Builder builder = (this.f34300i & 1) == 1 ? this.f34301o.toBuilder() : null;
                                JvmFieldSignature jvmFieldSignature = (JvmFieldSignature) codedInputStream.readMessage(JvmFieldSignature.PARSER, extensionRegistryLite);
                                this.f34301o = jvmFieldSignature;
                                if (builder != null) {
                                    builder.mergeFrom(jvmFieldSignature);
                                    this.f34301o = builder.buildPartial();
                                }
                                this.f34300i |= 1;
                            } else if (readTag == 18) {
                                JvmMethodSignature.Builder builder2 = (this.f34300i & 2) == 2 ? this.f34302p.toBuilder() : null;
                                JvmMethodSignature jvmMethodSignature = (JvmMethodSignature) codedInputStream.readMessage(JvmMethodSignature.PARSER, extensionRegistryLite);
                                this.f34302p = jvmMethodSignature;
                                if (builder2 != null) {
                                    builder2.mergeFrom(jvmMethodSignature);
                                    this.f34302p = builder2.buildPartial();
                                }
                                this.f34300i |= 2;
                            } else if (readTag == 26) {
                                JvmMethodSignature.Builder builder3 = (this.f34300i & 4) == 4 ? this.f34303q.toBuilder() : null;
                                JvmMethodSignature jvmMethodSignature2 = (JvmMethodSignature) codedInputStream.readMessage(JvmMethodSignature.PARSER, extensionRegistryLite);
                                this.f34303q = jvmMethodSignature2;
                                if (builder3 != null) {
                                    builder3.mergeFrom(jvmMethodSignature2);
                                    this.f34303q = builder3.buildPartial();
                                }
                                this.f34300i |= 4;
                            } else if (readTag == 34) {
                                JvmMethodSignature.Builder builder4 = (this.f34300i & 8) == 8 ? this.f34304r.toBuilder() : null;
                                JvmMethodSignature jvmMethodSignature3 = (JvmMethodSignature) codedInputStream.readMessage(JvmMethodSignature.PARSER, extensionRegistryLite);
                                this.f34304r = jvmMethodSignature3;
                                if (builder4 != null) {
                                    builder4.mergeFrom(jvmMethodSignature3);
                                    this.f34304r = builder4.buildPartial();
                                }
                                this.f34300i |= 8;
                            } else if (readTag != 42) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                JvmMethodSignature.Builder builder5 = (this.f34300i & 16) == 16 ? this.f34305s.toBuilder() : null;
                                JvmMethodSignature jvmMethodSignature4 = (JvmMethodSignature) codedInputStream.readMessage(JvmMethodSignature.PARSER, extensionRegistryLite);
                                this.f34305s = jvmMethodSignature4;
                                if (builder5 != null) {
                                    builder5.mergeFrom(jvmMethodSignature4);
                                    this.f34305s = builder5.buildPartial();
                                }
                                this.f34300i |= 16;
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34299e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34299e = newOutput.toByteString();
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
                this.f34299e = newOutput.toByteString();
                throw th4;
            }
            this.f34299e = newOutput.toByteString();
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
        private static final StringTableTypes f34314s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34315e;

        /* renamed from: i  reason: collision with root package name */
        private List f34316i;

        /* renamed from: o  reason: collision with root package name */
        private List f34317o;

        /* renamed from: p  reason: collision with root package name */
        private int f34318p;

        /* renamed from: q  reason: collision with root package name */
        private byte f34319q;

        /* renamed from: r  reason: collision with root package name */
        private int f34320r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<StringTableTypes, Builder> implements StringTableTypesOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34321e;

            /* renamed from: i  reason: collision with root package name */
            private List f34322i;

            /* renamed from: o  reason: collision with root package name */
            private List f34323o;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f34322i = list;
                this.f34323o = list;
                f();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f34321e & 2) != 2) {
                    this.f34323o = new ArrayList(this.f34323o);
                    this.f34321e |= 2;
                }
            }

            private void e() {
                if ((this.f34321e & 1) != 1) {
                    this.f34322i = new ArrayList(this.f34322i);
                    this.f34321e |= 1;
                }
            }

            private void f() {
            }

            public StringTableTypes buildPartial() {
                StringTableTypes stringTableTypes = new StringTableTypes(this);
                if ((this.f34321e & 1) == 1) {
                    this.f34322i = Collections.unmodifiableList(this.f34322i);
                    this.f34321e &= -2;
                }
                stringTableTypes.f34316i = this.f34322i;
                if ((this.f34321e & 2) == 2) {
                    this.f34323o = Collections.unmodifiableList(this.f34323o);
                    this.f34321e &= -3;
                }
                stringTableTypes.f34317o = this.f34323o;
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
                if (!stringTableTypes.f34316i.isEmpty()) {
                    if (this.f34322i.isEmpty()) {
                        this.f34322i = stringTableTypes.f34316i;
                        this.f34321e &= -2;
                    } else {
                        e();
                        this.f34322i.addAll(stringTableTypes.f34316i);
                    }
                }
                if (!stringTableTypes.f34317o.isEmpty()) {
                    if (this.f34323o.isEmpty()) {
                        this.f34323o = stringTableTypes.f34317o;
                        this.f34321e &= -3;
                    } else {
                        d();
                        this.f34323o.addAll(stringTableTypes.f34317o);
                    }
                }
                setUnknownFields(getUnknownFields().concat(stringTableTypes.f34315e));
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
            private static final Record f34324y;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f34325e;

            /* renamed from: i  reason: collision with root package name */
            private int f34326i;

            /* renamed from: o  reason: collision with root package name */
            private int f34327o;

            /* renamed from: p  reason: collision with root package name */
            private int f34328p;

            /* renamed from: q  reason: collision with root package name */
            private Object f34329q;

            /* renamed from: r  reason: collision with root package name */
            private Operation f34330r;

            /* renamed from: s  reason: collision with root package name */
            private List f34331s;

            /* renamed from: t  reason: collision with root package name */
            private int f34332t;

            /* renamed from: u  reason: collision with root package name */
            private List f34333u;

            /* renamed from: v  reason: collision with root package name */
            private int f34334v;

            /* renamed from: w  reason: collision with root package name */
            private byte f34335w;

            /* renamed from: x  reason: collision with root package name */
            private int f34336x;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<Record, Builder> implements RecordOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f34337e;

                /* renamed from: o  reason: collision with root package name */
                private int f34339o;

                /* renamed from: r  reason: collision with root package name */
                private List f34342r;

                /* renamed from: s  reason: collision with root package name */
                private List f34343s;

                /* renamed from: i  reason: collision with root package name */
                private int f34338i = 1;

                /* renamed from: p  reason: collision with root package name */
                private Object f34340p = "";

                /* renamed from: q  reason: collision with root package name */
                private Operation f34341q = Operation.NONE;

                private Builder() {
                    List list = Collections.EMPTY_LIST;
                    this.f34342r = list;
                    this.f34343s = list;
                    f();
                }

                static /* synthetic */ Builder b() {
                    return c();
                }

                private static Builder c() {
                    return new Builder();
                }

                private void d() {
                    if ((this.f34337e & 32) != 32) {
                        this.f34343s = new ArrayList(this.f34343s);
                        this.f34337e |= 32;
                    }
                }

                private void e() {
                    if ((this.f34337e & 16) != 16) {
                        this.f34342r = new ArrayList(this.f34342r);
                        this.f34337e |= 16;
                    }
                }

                private void f() {
                }

                public Record buildPartial() {
                    Record record = new Record(this);
                    int i10 = this.f34337e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    record.f34327o = this.f34338i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    record.f34328p = this.f34339o;
                    if ((i10 & 4) == 4) {
                        i11 |= 4;
                    }
                    record.f34329q = this.f34340p;
                    if ((i10 & 8) == 8) {
                        i11 |= 8;
                    }
                    record.f34330r = this.f34341q;
                    if ((this.f34337e & 16) == 16) {
                        this.f34342r = Collections.unmodifiableList(this.f34342r);
                        this.f34337e &= -17;
                    }
                    record.f34331s = this.f34342r;
                    if ((this.f34337e & 32) == 32) {
                        this.f34343s = Collections.unmodifiableList(this.f34343s);
                        this.f34337e &= -33;
                    }
                    record.f34333u = this.f34343s;
                    record.f34326i = i11;
                    return record;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public final boolean isInitialized() {
                    return true;
                }

                public Builder setOperation(Operation operation) {
                    operation.getClass();
                    this.f34337e |= 8;
                    this.f34341q = operation;
                    return this;
                }

                public Builder setPredefinedIndex(int i10) {
                    this.f34337e |= 2;
                    this.f34339o = i10;
                    return this;
                }

                public Builder setRange(int i10) {
                    this.f34337e |= 1;
                    this.f34338i = i10;
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
                        this.f34337e |= 4;
                        this.f34340p = record.f34329q;
                    }
                    if (record.hasOperation()) {
                        setOperation(record.getOperation());
                    }
                    if (!record.f34331s.isEmpty()) {
                        if (this.f34342r.isEmpty()) {
                            this.f34342r = record.f34331s;
                            this.f34337e &= -17;
                        } else {
                            e();
                            this.f34342r.addAll(record.f34331s);
                        }
                    }
                    if (!record.f34333u.isEmpty()) {
                        if (this.f34343s.isEmpty()) {
                            this.f34343s = record.f34333u;
                            this.f34337e &= -33;
                        } else {
                            d();
                            this.f34343s.addAll(record.f34333u);
                        }
                    }
                    setUnknownFields(getUnknownFields().concat(record.f34325e));
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
                private static Internal.EnumLiteMap f34344e = new a();

                /* renamed from: d  reason: collision with root package name */
                private final int f34346d;

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
                    this.f34346d = i11;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                public final int getNumber() {
                    return this.f34346d;
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
                f34324y = record;
                record.s();
            }

            public static Record getDefaultInstance() {
                return f34324y;
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            private void s() {
                this.f34327o = 1;
                this.f34328p = 0;
                this.f34329q = "";
                this.f34330r = Operation.NONE;
                List list = Collections.EMPTY_LIST;
                this.f34331s = list;
                this.f34333u = list;
            }

            public Operation getOperation() {
                return this.f34330r;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<Record> getParserForType() {
                return PARSER;
            }

            public int getPredefinedIndex() {
                return this.f34328p;
            }

            public int getRange() {
                return this.f34327o;
            }

            public int getReplaceCharCount() {
                return this.f34333u.size();
            }

            public List<Integer> getReplaceCharList() {
                return this.f34333u;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f34336x;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f34326i & 1) == 1) {
                    i10 = CodedOutputStream.computeInt32Size(1, this.f34327o);
                } else {
                    i10 = 0;
                }
                if ((this.f34326i & 2) == 2) {
                    i10 += CodedOutputStream.computeInt32Size(2, this.f34328p);
                }
                if ((this.f34326i & 8) == 8) {
                    i10 += CodedOutputStream.computeEnumSize(3, this.f34330r.getNumber());
                }
                int i12 = 0;
                for (int i13 = 0; i13 < this.f34331s.size(); i13++) {
                    i12 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f34331s.get(i13)).intValue());
                }
                int i14 = i10 + i12;
                if (!getSubstringIndexList().isEmpty()) {
                    i14 = i14 + 1 + CodedOutputStream.computeInt32SizeNoTag(i12);
                }
                this.f34332t = i12;
                int i15 = 0;
                for (int i16 = 0; i16 < this.f34333u.size(); i16++) {
                    i15 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f34333u.get(i16)).intValue());
                }
                int i17 = i14 + i15;
                if (!getReplaceCharList().isEmpty()) {
                    i17 = i17 + 1 + CodedOutputStream.computeInt32SizeNoTag(i15);
                }
                this.f34334v = i15;
                if ((this.f34326i & 4) == 4) {
                    i17 += CodedOutputStream.computeBytesSize(6, getStringBytes());
                }
                int size = i17 + this.f34325e.size();
                this.f34336x = size;
                return size;
            }

            public String getString() {
                Object obj = this.f34329q;
                if (obj instanceof String) {
                    return (String) obj;
                }
                ByteString byteString = (ByteString) obj;
                String stringUtf8 = byteString.toStringUtf8();
                if (byteString.isValidUtf8()) {
                    this.f34329q = stringUtf8;
                }
                return stringUtf8;
            }

            public ByteString getStringBytes() {
                Object obj = this.f34329q;
                if (obj instanceof String) {
                    ByteString copyFromUtf8 = ByteString.copyFromUtf8((String) obj);
                    this.f34329q = copyFromUtf8;
                    return copyFromUtf8;
                }
                return (ByteString) obj;
            }

            public int getSubstringIndexCount() {
                return this.f34331s.size();
            }

            public List<Integer> getSubstringIndexList() {
                return this.f34331s;
            }

            public boolean hasOperation() {
                if ((this.f34326i & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasPredefinedIndex() {
                if ((this.f34326i & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasRange() {
                if ((this.f34326i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasString() {
                if ((this.f34326i & 4) == 4) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f34335w;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                this.f34335w = (byte) 1;
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f34326i & 1) == 1) {
                    codedOutputStream.writeInt32(1, this.f34327o);
                }
                if ((this.f34326i & 2) == 2) {
                    codedOutputStream.writeInt32(2, this.f34328p);
                }
                if ((this.f34326i & 8) == 8) {
                    codedOutputStream.writeEnum(3, this.f34330r.getNumber());
                }
                if (getSubstringIndexList().size() > 0) {
                    codedOutputStream.writeRawVarint32(34);
                    codedOutputStream.writeRawVarint32(this.f34332t);
                }
                for (int i10 = 0; i10 < this.f34331s.size(); i10++) {
                    codedOutputStream.writeInt32NoTag(((Integer) this.f34331s.get(i10)).intValue());
                }
                if (getReplaceCharList().size() > 0) {
                    codedOutputStream.writeRawVarint32(42);
                    codedOutputStream.writeRawVarint32(this.f34334v);
                }
                for (int i11 = 0; i11 < this.f34333u.size(); i11++) {
                    codedOutputStream.writeInt32NoTag(((Integer) this.f34333u.get(i11)).intValue());
                }
                if ((this.f34326i & 4) == 4) {
                    codedOutputStream.writeBytes(6, getStringBytes());
                }
                codedOutputStream.writeRawBytes(this.f34325e);
            }

            public static Builder newBuilder(Record record) {
                return newBuilder().mergeFrom(record);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Record getDefaultInstanceForType() {
                return f34324y;
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
                this.f34332t = -1;
                this.f34334v = -1;
                this.f34335w = (byte) -1;
                this.f34336x = -1;
                this.f34325e = builder.getUnknownFields();
            }

            private Record(boolean z10) {
                this.f34332t = -1;
                this.f34334v = -1;
                this.f34335w = (byte) -1;
                this.f34336x = -1;
                this.f34325e = ByteString.EMPTY;
            }

            private Record(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f34332t = -1;
                this.f34334v = -1;
                this.f34335w = (byte) -1;
                this.f34336x = -1;
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
                                    this.f34326i |= 1;
                                    this.f34327o = codedInputStream.readInt32();
                                } else if (readTag == 16) {
                                    this.f34326i |= 2;
                                    this.f34328p = codedInputStream.readInt32();
                                } else if (readTag == 24) {
                                    int readEnum = codedInputStream.readEnum();
                                    Operation valueOf = Operation.valueOf(readEnum);
                                    if (valueOf == null) {
                                        newInstance.writeRawVarint32(readTag);
                                        newInstance.writeRawVarint32(readEnum);
                                    } else {
                                        this.f34326i |= 8;
                                        this.f34330r = valueOf;
                                    }
                                } else if (readTag == 32) {
                                    if (!(z11 & true)) {
                                        this.f34331s = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f34331s.add(Integer.valueOf(codedInputStream.readInt32()));
                                } else if (readTag == 34) {
                                    int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f34331s = new ArrayList();
                                        z11 |= true;
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f34331s.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit);
                                } else if (readTag == 40) {
                                    if (!(z11 & true)) {
                                        this.f34333u = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f34333u.add(Integer.valueOf(codedInputStream.readInt32()));
                                } else if (readTag == 42) {
                                    int pushLimit2 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f34333u = new ArrayList();
                                        z11 |= true;
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f34333u.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit2);
                                } else if (readTag != 50) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    ByteString readBytes = codedInputStream.readBytes();
                                    this.f34326i |= 4;
                                    this.f34329q = readBytes;
                                }
                            }
                            z10 = true;
                        } catch (Throwable th2) {
                            if (z11 & true) {
                                this.f34331s = Collections.unmodifiableList(this.f34331s);
                            }
                            if (z11 & true) {
                                this.f34333u = Collections.unmodifiableList(this.f34333u);
                            }
                            try {
                                newInstance.flush();
                            } catch (IOException unused) {
                            } catch (Throwable th3) {
                                this.f34325e = newOutput.toByteString();
                                throw th3;
                            }
                            this.f34325e = newOutput.toByteString();
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
                    this.f34331s = Collections.unmodifiableList(this.f34331s);
                }
                if (z11 & true) {
                    this.f34333u = Collections.unmodifiableList(this.f34333u);
                }
                try {
                    newInstance.flush();
                } catch (IOException unused2) {
                } catch (Throwable th4) {
                    this.f34325e = newOutput.toByteString();
                    throw th4;
                }
                this.f34325e = newOutput.toByteString();
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
            f34314s = stringTableTypes;
            stringTableTypes.m();
        }

        public static StringTableTypes getDefaultInstance() {
            return f34314s;
        }

        private void m() {
            List list = Collections.EMPTY_LIST;
            this.f34316i = list;
            this.f34317o = list;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public static StringTableTypes parseDelimitedFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseDelimitedFrom(inputStream, extensionRegistryLite);
        }

        public List<Integer> getLocalNameList() {
            return this.f34317o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<StringTableTypes> getParserForType() {
            return PARSER;
        }

        public List<Record> getRecordList() {
            return this.f34316i;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f34320r;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f34316i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f34316i.get(i12));
            }
            int i13 = 0;
            for (int i14 = 0; i14 < this.f34317o.size(); i14++) {
                i13 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f34317o.get(i14)).intValue());
            }
            int i15 = i11 + i13;
            if (!getLocalNameList().isEmpty()) {
                i15 = i15 + 1 + CodedOutputStream.computeInt32SizeNoTag(i13);
            }
            this.f34318p = i13;
            int size = i15 + this.f34315e.size();
            this.f34320r = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34319q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f34319q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f34316i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f34316i.get(i10));
            }
            if (getLocalNameList().size() > 0) {
                codedOutputStream.writeRawVarint32(42);
                codedOutputStream.writeRawVarint32(this.f34318p);
            }
            for (int i11 = 0; i11 < this.f34317o.size(); i11++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f34317o.get(i11)).intValue());
            }
            codedOutputStream.writeRawBytes(this.f34315e);
        }

        public static Builder newBuilder(StringTableTypes stringTableTypes) {
            return newBuilder().mergeFrom(stringTableTypes);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public StringTableTypes getDefaultInstanceForType() {
            return f34314s;
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
            this.f34318p = -1;
            this.f34319q = (byte) -1;
            this.f34320r = -1;
            this.f34315e = builder.getUnknownFields();
        }

        private StringTableTypes(boolean z10) {
            this.f34318p = -1;
            this.f34319q = (byte) -1;
            this.f34320r = -1;
            this.f34315e = ByteString.EMPTY;
        }

        private StringTableTypes(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34318p = -1;
            this.f34319q = (byte) -1;
            this.f34320r = -1;
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
                                    this.f34316i = new ArrayList();
                                    z11 |= true;
                                }
                                this.f34316i.add(codedInputStream.readMessage(Record.PARSER, extensionRegistryLite));
                            } else if (readTag == 40) {
                                if (!(z11 & true)) {
                                    this.f34317o = new ArrayList();
                                    z11 |= true;
                                }
                                this.f34317o.add(Integer.valueOf(codedInputStream.readInt32()));
                            } else if (readTag != 42) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f34317o = new ArrayList();
                                    z11 |= true;
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f34317o.add(Integer.valueOf(codedInputStream.readInt32()));
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
                        this.f34316i = Collections.unmodifiableList(this.f34316i);
                    }
                    if (z11 & true) {
                        this.f34317o = Collections.unmodifiableList(this.f34317o);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f34315e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f34315e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11 & true) {
                this.f34316i = Collections.unmodifiableList(this.f34316i);
            }
            if (z11 & true) {
                this.f34317o = Collections.unmodifiableList(this.f34317o);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34315e = newOutput.toByteString();
                throw th4;
            }
            this.f34315e = newOutput.toByteString();
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
