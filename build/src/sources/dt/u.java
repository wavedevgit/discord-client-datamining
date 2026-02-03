package dt;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class u extends m {

    /* renamed from: c  reason: collision with root package name */
    private final Json f22469c;

    /* renamed from: d  reason: collision with root package name */
    private int f22470d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public u(z writer, Json json) {
        super(writer);
        Intrinsics.checkNotNullParameter(writer, "writer");
        Intrinsics.checkNotNullParameter(json, "json");
        this.f22469c = json;
    }

    @Override // dt.m
    public void b() {
        o(true);
        this.f22470d++;
    }

    @Override // dt.m
    public void c() {
        o(false);
        k(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        int i10 = this.f22470d;
        for (int i11 = 0; i11 < i10; i11++) {
            k(this.f22469c.e().n());
        }
    }

    @Override // dt.m
    public void d() {
        if (a()) {
            o(false);
        } else {
            c();
        }
    }

    @Override // dt.m
    public void p() {
        f(' ');
    }

    @Override // dt.m
    public void q() {
        this.f22470d--;
    }
}
