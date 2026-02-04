package wm;

import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import okio.Buffer;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: c  reason: collision with root package name */
    public static final a f52539c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Function0 f52540a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f52541b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: wm.i$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0703a extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ByteString f52542d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0703a(ByteString byteString) {
                super(0);
                this.f52542d = byteString;
            }

            @Override // kotlin.jvm.functions.Function0
            /* renamed from: a */
            public final ByteString invoke() {
                return this.f52542d;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function1 f52543d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(Function1 function1) {
                super(0);
                this.f52543d = function1;
            }

            @Override // kotlin.jvm.functions.Function0
            /* renamed from: a */
            public final ByteString invoke() {
                Buffer buffer = new Buffer();
                this.f52543d.invoke(buffer);
                return buffer.L1();
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final i a(Function0 lazy) {
            Intrinsics.checkNotNullParameter(lazy, "lazy");
            return new i(lazy, null);
        }

        public final i b(ByteString byteString) {
            Intrinsics.checkNotNullParameter(byteString, "byteString");
            return new i(new C0703a(byteString), null);
        }

        public final i c(Function1 lazy) {
            Intrinsics.checkNotNullParameter(lazy, "lazy");
            return a(new b(lazy));
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function0 {
        b() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final ByteString invoke() {
            return (ByteString) i.this.f52540a.invoke();
        }
    }

    public /* synthetic */ i(Function0 function0, DefaultConstructorMarker defaultConstructorMarker) {
        this(function0);
    }

    public final ByteString b() {
        return (ByteString) this.f52541b.getValue();
    }

    public boolean equals(Object obj) {
        i iVar;
        if (obj instanceof i) {
            iVar = (i) obj;
        } else {
            iVar = null;
        }
        if (iVar == null) {
            return false;
        }
        return Intrinsics.areEqual(b(), iVar.b());
    }

    public int hashCode() {
        return b().hashCode();
    }

    public String toString() {
        return "Snapshot(" + b() + ')';
    }

    private i(Function0 function0) {
        this.f52540a = function0;
        this.f52541b = lr.l.a(new b());
    }
}
