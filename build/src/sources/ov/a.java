package ov;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a extends k {

    /* renamed from: i  reason: collision with root package name */
    public static final C0554a f44799i = new C0554a(null);

    /* renamed from: e  reason: collision with root package name */
    private final j f44800e;

    /* renamed from: ov.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0554a {
        public /* synthetic */ C0554a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0554a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(j replaceData) {
        super(null);
        Intrinsics.checkNotNullParameter(replaceData, "replaceData");
        this.f44800e = replaceData;
    }

    public j a() {
        return this.f44800e;
    }

    @Override // kotlin.jvm.functions.Function0
    /* renamed from: b */
    public String invoke() {
        return StringsKt.J(a().c(), a().b(), a().a(), false, 4, null);
    }
}
