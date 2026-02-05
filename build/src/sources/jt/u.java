package jt;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class u extends m {

    /* renamed from: c  reason: collision with root package name */
    private final Json f31385c;

    /* renamed from: d  reason: collision with root package name */
    private int f31386d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public u(z writer, Json json) {
        super(writer);
        Intrinsics.checkNotNullParameter(writer, "writer");
        Intrinsics.checkNotNullParameter(json, "json");
        this.f31385c = json;
    }

    @Override // jt.m
    public void b() {
        o(true);
        this.f31386d++;
    }

    @Override // jt.m
    public void c() {
        o(false);
        k(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        int i10 = this.f31386d;
        for (int i11 = 0; i11 < i10; i11++) {
            k(this.f31385c.e().n());
        }
    }

    @Override // jt.m
    public void d() {
        if (a()) {
            o(false);
        } else {
            c();
        }
    }

    @Override // jt.m
    public void p() {
        f(' ');
    }

    @Override // jt.m
    public void q() {
        this.f31386d--;
    }
}
