package iw;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a extends k {

    /* renamed from: i  reason: collision with root package name */
    public static final C0414a f31013i = new C0414a(null);

    /* renamed from: e  reason: collision with root package name */
    private final j f31014e;

    /* renamed from: iw.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0414a {
        public /* synthetic */ C0414a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0414a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(j replaceData) {
        super(null);
        Intrinsics.checkNotNullParameter(replaceData, "replaceData");
        this.f31014e = replaceData;
    }

    public j a() {
        return this.f31014e;
    }

    @Override // kotlin.jvm.functions.Function0
    /* renamed from: b */
    public String invoke() {
        return StringsKt.J(a().c(), a().b(), a().a(), false, 4, null);
    }
}
