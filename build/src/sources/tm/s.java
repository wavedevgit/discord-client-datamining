package tm;

import java.io.EOFException;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.reflect.KClass;
import kotlin.reflect.KType;
import kotlin.sequences.Sequence;
import okio.Buffer;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s {

    /* renamed from: f  reason: collision with root package name */
    public static final a f49758f = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final kotlin.reflect.b f49759a;

    /* renamed from: b  reason: collision with root package name */
    private final s f49760b;

    /* renamed from: c  reason: collision with root package name */
    private final Function0 f49761c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f49762d;

    /* renamed from: e  reason: collision with root package name */
    private final Sequence f49763e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final s a(ByteString bytes) {
            s a10;
            Intrinsics.checkNotNullParameter(bytes, "bytes");
            Buffer buffer = new Buffer();
            buffer.a2(bytes);
            try {
                String b10 = j.b(buffer);
                byte readByte = buffer.readByte();
                if (readByte == 0) {
                    a10 = null;
                } else if (readByte == 1) {
                    a10 = s.f49758f.a(buffer.L1());
                } else {
                    throw new IllegalArgumentException("Invalid WorkflowIdentifier");
                }
                return new s(vr.a.e(Class.forName(b10)), a10, null, 4, null);
            } catch (EOFException unused) {
                throw new IllegalArgumentException("Invalid WorkflowIdentifier");
            }
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f49764d = new b();

        b() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final s invoke(s it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return it.f49760b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final c f49765d = new c();

        c() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final CharSequence invoke(s it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return it.d();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function0 {
        d() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return s.this.f49759a instanceof KClass ? vr.a.b((KClass) s.this.f49759a).getName() : s.this.f49759a.toString();
        }
    }

    public s(kotlin.reflect.b type, s sVar, Function0 function0) {
        Intrinsics.checkNotNullParameter(type, "type");
        this.f49759a = type;
        this.f49760b = sVar;
        this.f49761c = function0;
        if (!(type instanceof KClass) && (!(type instanceof KType) || !(((KType) type).getClassifier() instanceof KClass))) {
            throw new IllegalArgumentException(Intrinsics.stringPlus("Expected type to be either a KClass or a KType with a KClass classifier, but was ", type).toString());
        }
        this.f49762d = ir.l.a(ir.o.f31119e, new d());
        this.f49763e = kotlin.sequences.k.q(this, b.f49764d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final String d() {
        Object value = this.f49762d.getValue();
        Intrinsics.checkNotNullExpressionValue(value, "<get-typeName>(...)");
        return (String) value;
    }

    public final ByteString e() {
        ByteString byteString = null;
        if (!(this.f49759a instanceof KClass)) {
            return null;
        }
        s sVar = this.f49760b;
        if (sVar != null) {
            ByteString e10 = sVar.e();
            if (e10 == null) {
                return null;
            }
            byteString = e10;
        }
        Buffer buffer = new Buffer();
        j.d(buffer, d());
        if (byteString != null) {
            buffer.writeByte(1);
            buffer.a2(byteString);
        } else {
            buffer.writeByte(0);
        }
        return buffer.L1();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof s)) {
            return false;
        }
        s sVar = (s) obj;
        if (Intrinsics.areEqual(this.f49759a, sVar.f49759a) && Intrinsics.areEqual(this.f49760b, sVar.f49760b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = this.f49759a.hashCode() * 31;
        s sVar = this.f49760b;
        if (sVar == null) {
            hashCode = 0;
        } else {
            hashCode = sVar.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        String str;
        Function0 function0 = this.f49761c;
        if (function0 == null) {
            str = null;
        } else {
            str = (String) function0.invoke();
        }
        if (str == null) {
            String P = kotlin.sequences.k.P(this.f49763e, null, null, null, 0, null, c.f49765d, 31, null);
            return "WorkflowIdentifier(" + P + ')';
        }
        return str;
    }

    public /* synthetic */ s(kotlin.reflect.b bVar, s sVar, Function0 function0, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, (i10 & 2) != 0 ? null : sVar, (i10 & 4) != 0 ? null : function0);
    }
}
