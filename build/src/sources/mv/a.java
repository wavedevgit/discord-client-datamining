package mv;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a extends k {

    /* renamed from: i  reason: collision with root package name */
    public static final C0512a f39444i = new C0512a(null);

    /* renamed from: e  reason: collision with root package name */
    private final j f39445e;

    /* renamed from: mv.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0512a {
        public /* synthetic */ C0512a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0512a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(j replaceData) {
        super(null);
        Intrinsics.checkNotNullParameter(replaceData, "replaceData");
        this.f39445e = replaceData;
    }

    public j a() {
        return this.f39445e;
    }

    @Override // kotlin.jvm.functions.Function0
    /* renamed from: b */
    public String invoke() {
        return StringsKt.J(a().c(), a().b(), a().a(), false, 4, null);
    }
}
