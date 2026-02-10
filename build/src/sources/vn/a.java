package vn;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends d {

    /* renamed from: c  reason: collision with root package name */
    public static final C0711a f51646c = new C0711a(null);

    /* renamed from: vn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0711a implements tn.b {
        public /* synthetic */ C0711a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // tn.b
        public String a() {
            return "onDidAppear";
        }

        @Override // tn.b
        public String getEventName() {
            return "topDidAppear";
        }

        private C0711a() {
        }
    }

    public a(int i10, int i11) {
        super(i10, i11, "topDidAppear", "onDidAppear");
    }
}
