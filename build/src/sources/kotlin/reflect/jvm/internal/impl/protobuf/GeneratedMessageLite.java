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
        final MessageLite f33923a;

        /* renamed from: b  reason: collision with root package name */
        final Object f33924b;

        /* renamed from: c  reason: collision with root package name */
        final MessageLite f33925c;

        /* renamed from: d  reason: collision with root package name */
        final b f33926d;

        /* renamed from: e  reason: collision with root package name */
        final Class f33927e;

        /* renamed from: f  reason: collision with root package name */
        final Method f33928f;

        GeneratedExtension(MessageLite messageLite, Object obj, MessageLite messageLite2, b bVar, Class cls) {
            if (messageLite != null) {
                if (bVar.getLiteType() == WireFormat.FieldType.MESSAGE && messageLite2 == null) {
                    throw new IllegalArgumentException("Null messageDefaultInstance");
                }
                this.f33923a = messageLite;
                this.f33924b = obj;
                this.f33925c = messageLite2;
                this.f33926d = bVar;
                this.f33927e = cls;
                if (Internal.EnumLite.class.isAssignableFrom(cls)) {
                    this.f33928f = GeneratedMessageLite.c(cls, "valueOf", Integer.TYPE);
                    return;
                } else {
                    this.f33928f = null;
                    return;
                }
            }
            throw new IllegalArgumentException("Null containingTypeDefaultInstance");
        }

        Object a(Object obj) {
            if (this.f33926d.isRepeated()) {
                if (this.f33926d.getLiteJavaType() == WireFormat.JavaType.ENUM) {
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
            if (this.f33926d.getLiteJavaType() == WireFormat.JavaType.ENUM) {
                return GeneratedMessageLite.d(this.f33928f, null, (Integer) obj);
            }
            return obj;
        }

        Object c(Object obj) {
            if (this.f33926d.getLiteJavaType() == WireFormat.JavaType.ENUM) {
                return Integer.valueOf(((Internal.EnumLite) obj).getNumber());
            }
            return obj;
        }

        public ContainingType getContainingTypeDefaultInstance() {
            return (ContainingType) this.f33923a;
        }

        public MessageLite getMessageDefaultInstance() {
            return this.f33925c;
        }

        public int getNumber() {
            return this.f33926d.getNumber();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f33929a;

        static {
            int[] iArr = new int[WireFormat.JavaType.values().length];
            f33929a = iArr;
            try {
                iArr[WireFormat.JavaType.MESSAGE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f33929a[WireFormat.JavaType.ENUM.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements FieldSet.FieldDescriptorLite {

        /* renamed from: d  reason: collision with root package name */
        final Internal.EnumLiteMap f33930d;

        /* renamed from: e  reason: collision with root package name */
        final int f33931e;

        /* renamed from: i  reason: collision with root package name */
        final WireFormat.FieldType f33932i;

        /* renamed from: o  reason: collision with root package name */
        final boolean f33933o;

        /* renamed from: p  reason: collision with root package name */
        final boolean f33934p;

        b(Internal.EnumLiteMap enumLiteMap, int i10, WireFormat.FieldType fieldType, boolean z10, boolean z11) {
            this.f33930d = enumLiteMap;
            this.f33931e = i10;
            this.f33932i = fieldType;
            this.f33933o = z10;
            this.f33934p = z11;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(b bVar) {
            return this.f33931e - bVar.f33931e;
        }

        public Internal.EnumLiteMap d() {
            return this.f33930d;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.FieldSet.FieldDescriptorLite
        public WireFormat.JavaType getLiteJavaType() {
            return this.f33932i.getJavaType();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.FieldSet.FieldDescriptorLite
        public WireFormat.FieldType getLiteType() {
            return this.f33932i;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.FieldSet.FieldDescriptorLite
        public int getNumber() {
            return this.f33931e;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.FieldSet.FieldDescriptorLite
        public MessageLite.Builder internalMergeFrom(MessageLite.Builder builder, MessageLite messageLite) {
            return ((Builder) builder).mergeFrom((GeneratedMessageLite) messageLite);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.FieldSet.FieldDescriptorLite
        public boolean isPacked() {
            return this.f33934p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.FieldSet.FieldDescriptorLite
        public boolean isRepeated() {
            return this.f33933o;
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
        private ByteString f33915d = ByteString.EMPTY;

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public abstract MessageType getDefaultInstanceForType();

        public final ByteString getUnknownFields() {
            return this.f33915d;
        }

        public abstract BuilderType mergeFrom(MessageType messagetype);

        public final BuilderType setUnknownFields(ByteString byteString) {
            this.f33915d = byteString;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
        /* renamed from: clone */
        public BuilderType mo1201clone() {
            throw new UnsupportedOperationException("This is supposed to be overridden by subclasses.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class ExtendableMessage<MessageType extends ExtendableMessage<MessageType>> extends GeneratedMessageLite implements ExtendableMessageOrBuilder<MessageType> {

        /* renamed from: e  reason: collision with root package name */
        private final FieldSet f33918e;

        /* JADX INFO: Access modifiers changed from: protected */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class ExtensionWriter {

            /* renamed from: a  reason: collision with root package name */
            private final Iterator f33919a;

            /* renamed from: b  reason: collision with root package name */
            private Map.Entry f33920b;

            /* renamed from: c  reason: collision with root package name */
            private final boolean f33921c;

            /* synthetic */ ExtensionWriter(ExtendableMessage extendableMessage, boolean z10, a aVar) {
                this(z10);
            }

            public void writeUntil(int i10, CodedOutputStream codedOutputStream) {
                while (true) {
                    Map.Entry entry = this.f33920b;
                    if (entry != null && ((b) entry.getKey()).getNumber() < i10) {
                        b bVar = (b) this.f33920b.getKey();
                        if (this.f33921c && bVar.getLiteJavaType() == WireFormat.JavaType.MESSAGE && !bVar.isRepeated()) {
                            codedOutputStream.writeMessageSetExtension(bVar.getNumber(), (MessageLite) this.f33920b.getValue());
                        } else {
                            FieldSet.z(bVar, this.f33920b.getValue(), codedOutputStream);
                        }
                        if (this.f33919a.hasNext()) {
                            this.f33920b = (Map.Entry) this.f33919a.next();
                        } else {
                            this.f33920b = null;
                        }
                    } else {
                        return;
                    }
                }
            }

            private ExtensionWriter(boolean z10) {
                Iterator p10 = ExtendableMessage.this.f33918e.p();
                this.f33919a = p10;
                if (p10.hasNext()) {
                    this.f33920b = (Map.Entry) p10.next();
                }
                this.f33921c = z10;
            }
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public ExtendableMessage() {
            this.f33918e = FieldSet.t();
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
            this.f33918e.q();
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite
        public boolean f(CodedInputStream codedInputStream, CodedOutputStream codedOutputStream, ExtensionRegistryLite extensionRegistryLite, int i10) {
            return GeneratedMessageLite.g(this.f33918e, getDefaultInstanceForType(), codedInputStream, codedOutputStream, extensionRegistryLite, i10);
        }

        public final <Type> Type getExtension(GeneratedExtension<MessageType, Type> generatedExtension) {
            l(generatedExtension);
            Object h10 = this.f33918e.h(generatedExtension.f33926d);
            if (h10 == null) {
                return (Type) generatedExtension.f33924b;
            }
            return (Type) generatedExtension.a(h10);
        }

        public final <Type> int getExtensionCount(GeneratedExtension<MessageType, List<Type>> generatedExtension) {
            l(generatedExtension);
            return this.f33918e.j(generatedExtension.f33926d);
        }

        public final <Type> boolean hasExtension(GeneratedExtension<MessageType, Type> generatedExtension) {
            l(generatedExtension);
            return this.f33918e.m(generatedExtension.f33926d);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public boolean i() {
            return this.f33918e.n();
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public int j() {
            return this.f33918e.k();
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public ExtensionWriter k() {
            return new ExtensionWriter(this, false, null);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public ExtendableMessage(ExtendableBuilder extendableBuilder) {
            this.f33918e = extendableBuilder.c();
        }

        public final <Type> Type getExtension(GeneratedExtension<MessageType, List<Type>> generatedExtension, int i10) {
            l(generatedExtension);
            return (Type) generatedExtension.b(this.f33918e.i(generatedExtension.f33926d, i10));
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public GeneratedMessageLite(Builder builder) {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class ExtendableBuilder<MessageType extends ExtendableMessage<MessageType>, BuilderType extends ExtendableBuilder<MessageType, BuilderType>> extends Builder<MessageType, BuilderType> implements ExtendableMessageOrBuilder<MessageType> {

        /* renamed from: e  reason: collision with root package name */
        private FieldSet f33916e = FieldSet.g();

        /* renamed from: i  reason: collision with root package name */
        private boolean f33917i;

        /* JADX INFO: Access modifiers changed from: private */
        public FieldSet c() {
            this.f33916e.q();
            this.f33917i = false;
            return this.f33916e;
        }

        private void d() {
            if (!this.f33917i) {
                this.f33916e = this.f33916e.clone();
                this.f33917i = true;
            }
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public boolean e() {
            return this.f33916e.n();
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public final void f(ExtendableMessage extendableMessage) {
            d();
            this.f33916e.r(extendableMessage.f33918e);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
        public BuilderType clone() {
            throw new UnsupportedOperationException("This is supposed to be overridden by subclasses.");
        }
    }
}
