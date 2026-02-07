package js;

import kotlin.Function;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KFunction;
import kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.MetadataVersion;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.TypeTable;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmNameResolver;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmProtoBufUtil;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.MemberDeserializer;
import ks.h1;
import ks.j3;
import ks.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class d {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f30996d = new a();

        a() {
            super(2, MemberDeserializer.class, "loadFunction", "loadFunction(Lorg/jetbrains/kotlin/metadata/ProtoBuf$Function;)Lorg/jetbrains/kotlin/descriptors/SimpleFunctionDescriptor;", 0);
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: a */
        public final SimpleFunctionDescriptor invoke(MemberDeserializer p02, ProtoBuf.Function p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            return p02.loadFunction(p12);
        }
    }

    public static final KFunction a(Function function) {
        boolean z10;
        Intrinsics.checkNotNullParameter(function, "<this>");
        Metadata metadata = (Metadata) function.getClass().getAnnotation(Metadata.class);
        if (metadata == null) {
            return null;
        }
        String[] d12 = metadata.d1();
        if (d12.length == 0) {
            d12 = null;
        }
        if (d12 == null) {
            return null;
        }
        Pair<JvmNameResolver, ProtoBuf.Function> readFunctionDataFrom = JvmProtoBufUtil.readFunctionDataFrom(d12, metadata.d2());
        JvmNameResolver jvmNameResolver = (JvmNameResolver) readFunctionDataFrom.a();
        ProtoBuf.Function function2 = (ProtoBuf.Function) readFunctionDataFrom.b();
        int[] mv2 = metadata.mv();
        if ((metadata.xi() & 8) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        MetadataVersion metadataVersion = new MetadataVersion(mv2, z10);
        Class<?> cls = function.getClass();
        ProtoBuf.TypeTable typeTable = function2.getTypeTable();
        Intrinsics.checkNotNullExpressionValue(typeTable, "getTypeTable(...)");
        return new h1(k.f35398o, (SimpleFunctionDescriptor) j3.h(cls, function2, jvmNameResolver, new TypeTable(typeTable), metadataVersion, a.f30996d));
    }
}
