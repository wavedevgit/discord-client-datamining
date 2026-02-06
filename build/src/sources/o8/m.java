package o8;

import com.facebook.common.internal.Supplier;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class m {

    /* renamed from: a  reason: collision with root package name */
    public static final Supplier f41556a = new b();

    /* renamed from: b  reason: collision with root package name */
    public static final Supplier f41557b = new c();

    /* renamed from: c  reason: collision with root package name */
    public static final Supplier f41558c = new d();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Supplier {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Object f41559a;

        a(Object obj) {
            this.f41559a = obj;
        }

        @Override // com.facebook.common.internal.Supplier
        public Object get() {
            return this.f41559a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b implements Supplier {
        b() {
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public Boolean get() {
            return Boolean.TRUE;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class c implements Supplier {
        c() {
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public Boolean get() {
            return Boolean.FALSE;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class d implements Supplier {
        d() {
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public String get() {
            return "";
        }
    }

    public static Supplier a(Object obj) {
        return new a(obj);
    }
}
