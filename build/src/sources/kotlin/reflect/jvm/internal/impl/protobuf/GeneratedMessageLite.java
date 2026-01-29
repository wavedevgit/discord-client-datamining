package kotlin.reflect.jvm.internal.impl.protobuf;

import java.io.Serializable;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite;
import kotlin.reflect.jvm.internal.impl.protobuf.FieldSet;
import kotlin.reflect.jvm.internal.impl.protobuf.Internal;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
import kotlin.reflect.jvm.internal.impl.protobuf.WireFormat;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class GeneratedMessageLite extends AbstractMessageLite implements Serializable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface ExtendableMessageOrBuilder<MessageType extends ExtendableMessage> extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class GeneratedExtension<ContainingType extends MessageLite, Type> {

        /* renamed from: a  reason: collision with root package name */
        final MessageLite f35218a;

        /* renamed from: b  reason: collision with root package name */
        final Object f35219b;

        /* renamed from: c  reason: collision with root package name */
        final MessageLite f35220c;

        /* renamed from: d  reason: collision with root package name */
        final b f35221d;

        /* renamed from: e  reason: collision with root package name */
        final Class f35222e;

        /* renamed from: f  reason: collision with root package name */
        final Method f35223f;

        GeneratedExtension(MessageLite messageLite, Object obj, MessageLite messageLite2, b bVar, Class cls) {
            if (messageLite != null) {
                if (bVar.getLiteType() == WireFormat.FieldType.MESSAGE && messageLite2 == null) {
                    throw new IllegalArgumentException("Null messageDefaultInstance");
                }
                this.f35218a = messageLite;
                this.f35219b = obj;
                this.f35220c = messageLite2;
                this.f35221d = bVar;
                this.f35222e = cls;
                if (Internal.EnumLite.class.isAssignableFrom(cls)) {
                    this.f35223f = GeneratedMessageLite.c(cls, "valueOf", Integer.TYPE);
                    return;
                } else {
                    this.f35223f = null;
                    return;
                }
            }
            throw new IllegalArgumentException("Null containingTypeDefaultInstance");
        }

        Object a(Object obj) {
            if (this.f35221d.isRepeated()) {
                if (this.f35221d.getLiteJavaType() == WireFormat.JavaType.ENUM) {
                    ArrayList arrayList = new ArrayList();
                    for (Object obj2 : (List) obj) {
                        arrayList.add(b(obj2));
                    }
                    return arrayList;
                }
                return obj;
            }
            return b(obj);
        }

        Object b(Object obj) {
            if (this.f35221d.getLiteJavaType() == WireFormat.JavaType.ENUM) {
                return GeneratedMessageLite.d(this.f35223f, null, (Integer) obj);
            }
            return obj;
        }

        Object c(Object obj) {
            if (this.f35221d.getLiteJavaType() == WireFormat.JavaType.ENUM) {
                return Integer.valueOf(((Internal.EnumLite) obj).getNumber());
            }
            return obj;
        }

        public ContainingType getContainingTypeDefaultInstance() {
            return (ContainingType) this.f35218a;
        }

        public MessageLite getMessageDefaultInstance() {
            return this.f35220c;
        }

        public int getNumber() {
            return this.f35221d.getNumber();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f35224a;

        static {
            int[] iArr = new int[WireFormat.JavaType.values().length];
            f35224a = iArr;
            try {
                iArr[WireFormat.JavaType.MESSAGE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f35224a[WireFormat.JavaType.ENUM.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements FieldSet.FieldDescriptorLite {

        /* renamed from: d  reason: collision with root package name */
        final Internal.EnumLiteMap f35225d;

        /* renamed from: e  reason: collision with root package name */
        final int f35226e;

        /* renamed from: i  reason: collision with root package name */
        final WireFormat.FieldType f35227i;

        /* renamed from: o  reason: collision with root package name */
        final boolean f35228o;

        /* renamed from: p  reason: collision with root package name */
        final boolean f35229p;

        b(Internal.EnumLiteMap enumLiteMap, int i10, WireFormat.FieldType fieldType, boolean z10, boolean z11) {
            this.f35225d = enumLiteMap;
            this.f35226e = i10;
            this.f35227i = fieldType;
            this.f35228o = z10;
            this.f35229p = z11;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(b bVar) {
            return this.f35226e - bVar.f35226e;
        }

        public Internal.EnumLiteMap d() {
            return this.f35225d;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.FieldSet.FieldDescriptorLite
        public WireFormat.JavaType getLiteJavaType() {
            return this.f35227i.getJavaType();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.FieldSet.FieldDescriptorLite
        public WireFormat.FieldType getLiteType() {
            return this.f35227i;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.FieldSet.FieldDescriptorLite
        public int getNumber() {
            return this.f35226e;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.FieldSet.FieldDescriptorLite
        public MessageLite.Builder internalMergeFrom(MessageLite.Builder builder, MessageLite messageLite) {
            return ((Builder) builder).mergeFrom((GeneratedMessageLite) messageLite);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.FieldSet.FieldDescriptorLite
        public boolean isPacked() {
            return this.f35229p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.FieldSet.FieldDescriptorLite
        public boolean isRepeated() {
            return this.f35228o;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public GeneratedMessageLite() {
    }

    static Method c(Class cls, String str, Class... clsArr) {
        try {
            return cls.getMethod(str, clsArr);
        } catch (NoSuchMethodException e10) {
            String name = cls.getName();
            String valueOf = String.valueOf(str);
            StringBuilder sb2 = new StringBuilder(name.length() + 45 + valueOf.length());
            sb2.append("Generated message class \"");
            sb2.append(name);
            sb2.append("\" missing method \"");
            sb2.append(valueOf);
            sb2.append("\".");
            throw new RuntimeException(sb2.toString(), e10);
        }
    }

    static Object d(Method method, Object obj, Object... objArr) {
        try {
            return method.invoke(obj, objArr);
        } catch (IllegalAccessException e10) {
            throw new RuntimeException("Couldn't use Java reflection to implement protocol message reflection.", e10);
        } catch (InvocationTargetException e11) {
            Throwable cause = e11.getCause();
            if (!(cause instanceof RuntimeException)) {
                if (cause instanceof Error) {
                    throw ((Error) cause);
                }
                throw new RuntimeException("Unexpected exception thrown by generated accessor method.", cause);
            }
            throw ((RuntimeException) cause);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:16:0x0040  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0045  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static boolean g(kotlin.reflect.jvm.internal.impl.protobuf.FieldSet r5, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r6, kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r7, kotlin.reflect.jvm.internal.impl.protobuf.CodedOutputStream r8, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r9, int r10) {
        /*
            Method dump skipped, instructions count: 291
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.g(kotlin.reflect.jvm.internal.impl.protobuf.FieldSet, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite, kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.CodedOutputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite, int):boolean");
    }

    public static <ContainingType extends MessageLite, Type> GeneratedExtension<ContainingType, Type> newRepeatedGeneratedExtension(ContainingType containingtype, MessageLite messageLite, Internal.EnumLiteMap<?> enumLiteMap, int i10, WireFormat.FieldType fieldType, boolean z10, Class cls) {
        return new GeneratedExtension<>(containingtype, Collections.EMPTY_LIST, messageLite, new b(enumLiteMap, i10, fieldType, true, z10), cls);
    }

    public static <ContainingType extends MessageLite, Type> GeneratedExtension<ContainingType, Type> newSingularGeneratedExtension(ContainingType containingtype, Type type, MessageLite messageLite, Internal.EnumLiteMap<?> enumLiteMap, int i10, WireFormat.FieldType fieldType, Class cls) {
        return new GeneratedExtension<>(containingtype, type, messageLite, new b(enumLiteMap, i10, fieldType, false, false), cls);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void e() {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean f(CodedInputStream codedInputStream, CodedOutputStream codedOutputStream, ExtensionRegistryLite extensionRegistryLite, int i10) {
        return codedInputStream.skipField(i10, codedOutputStream);
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
    public Parser<? extends MessageLite> getParserForType() {
        throw new UnsupportedOperationException("This is supposed to be overridden by subclasses.");
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class Builder<MessageType extends GeneratedMessageLite, BuilderType extends Builder> extends AbstractMessageLite.Builder<BuilderType> {

        /* renamed from: d  reason: collision with root package name */
        private ByteString f35210d = ByteString.EMPTY;

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public abstract MessageType getDefaultInstanceForType();

        public final ByteString getUnknownFields() {
            return this.f35210d;
        }

        public abstract BuilderType mergeFrom(MessageType messagetype);

        public final BuilderType setUnknownFields(ByteString byteString) {
            this.f35210d = byteString;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
        /* renamed from: clone */
        public BuilderType mo1197clone() {
            throw new UnsupportedOperationException("This is supposed to be overridden by subclasses.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class ExtendableMessage<MessageType extends ExtendableMessage<MessageType>> extends GeneratedMessageLite implements ExtendableMessageOrBuilder<MessageType> {

        /* renamed from: e  reason: collision with root package name */
        private final FieldSet f35213e;

        /* JADX INFO: Access modifiers changed from: protected */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class ExtensionWriter {

            /* renamed from: a  reason: collision with root package name */
            private final Iterator f35214a;

            /* renamed from: b  reason: collision with root package name */
            private Map.Entry f35215b;

            /* renamed from: c  reason: collision with root package name */
            private final boolean f35216c;

            /* synthetic */ ExtensionWriter(ExtendableMessage extendableMessage, boolean z10, a aVar) {
                this(z10);
            }

            public void writeUntil(int i10, CodedOutputStream codedOutputStream) {
                while (true) {
                    Map.Entry entry = this.f35215b;
                    if (entry != null && ((b) entry.getKey()).getNumber() < i10) {
                        b bVar = (b) this.f35215b.getKey();
                        if (this.f35216c && bVar.getLiteJavaType() == WireFormat.JavaType.MESSAGE && !bVar.isRepeated()) {
                            codedOutputStream.writeMessageSetExtension(bVar.getNumber(), (MessageLite) this.f35215b.getValue());
                        } else {
                            FieldSet.z(bVar, this.f35215b.getValue(), codedOutputStream);
                        }
                        if (this.f35214a.hasNext()) {
                            this.f35215b = (Map.Entry) this.f35214a.next();
                        } else {
                            this.f35215b = null;
                        }
                    } else {
                        return;
                    }
                }
            }

            private ExtensionWriter(boolean z10) {
                Iterator p10 = ExtendableMessage.this.f35213e.p();
                this.f35214a = p10;
                if (p10.hasNext()) {
                    this.f35215b = (Map.Entry) p10.next();
                }
                this.f35216c = z10;
            }
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public ExtendableMessage() {
            this.f35213e = FieldSet.t();
        }

        private void l(GeneratedExtension generatedExtension) {
            if (generatedExtension.getContainingTypeDefaultInstance() == getDefaultInstanceForType()) {
                return;
            }
            throw new IllegalArgumentException("This extension is for a different message type.  Please make sure that you are not suppressing any generics type warnings.");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite
        public void e() {
            this.f35213e.q();
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite
        public boolean f(CodedInputStream codedInputStream, CodedOutputStream codedOutputStream, ExtensionRegistryLite extensionRegistryLite, int i10) {
            return GeneratedMessageLite.g(this.f35213e, getDefaultInstanceForType(), codedInputStream, codedOutputStream, extensionRegistryLite, i10);
        }

        public final <Type> Type getExtension(GeneratedExtension<MessageType, Type> generatedExtension) {
            l(generatedExtension);
            Object h10 = this.f35213e.h(generatedExtension.f35221d);
            if (h10 == null) {
                return (Type) generatedExtension.f35219b;
            }
            return (Type) generatedExtension.a(h10);
        }

        public final <Type> int getExtensionCount(GeneratedExtension<MessageType, List<Type>> generatedExtension) {
            l(generatedExtension);
            return this.f35213e.j(generatedExtension.f35221d);
        }

        public final <Type> boolean hasExtension(GeneratedExtension<MessageType, Type> generatedExtension) {
            l(generatedExtension);
            return this.f35213e.m(generatedExtension.f35221d);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public boolean i() {
            return this.f35213e.n();
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public int j() {
            return this.f35213e.k();
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public ExtensionWriter k() {
            return new ExtensionWriter(this, false, null);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public ExtendableMessage(ExtendableBuilder extendableBuilder) {
            this.f35213e = extendableBuilder.c();
        }

        public final <Type> Type getExtension(GeneratedExtension<MessageType, List<Type>> generatedExtension, int i10) {
            l(generatedExtension);
            return (Type) generatedExtension.b(this.f35213e.i(generatedExtension.f35221d, i10));
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public GeneratedMessageLite(Builder builder) {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class ExtendableBuilder<MessageType extends ExtendableMessage<MessageType>, BuilderType extends ExtendableBuilder<MessageType, BuilderType>> extends Builder<MessageType, BuilderType> implements ExtendableMessageOrBuilder<MessageType> {

        /* renamed from: e  reason: collision with root package name */
        private FieldSet f35211e = FieldSet.g();

        /* renamed from: i  reason: collision with root package name */
        private boolean f35212i;

        /* JADX INFO: Access modifiers changed from: private */
        public FieldSet c() {
            this.f35211e.q();
            this.f35212i = false;
            return this.f35211e;
        }

        private void d() {
            if (!this.f35212i) {
                this.f35211e = this.f35211e.clone();
                this.f35212i = true;
            }
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public boolean e() {
            return this.f35211e.n();
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public final void f(ExtendableMessage extendableMessage) {
            d();
            this.f35211e.r(extendableMessage.f35213e);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
        public BuilderType clone() {
            throw new UnsupportedOperationException("This is supposed to be overridden by subclasses.");
        }
    }
}
