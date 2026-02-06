package e;

import android.content.Context;
import android.content.Intent;
import androidx.activity.result.contract.ActivityResultContract;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends ActivityResultContract {

    /* renamed from: a  reason: collision with root package name */
    public static final C0281a f21207a = new C0281a(null);

    /* renamed from: e.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0281a {
        public /* synthetic */ C0281a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0281a() {
        }
    }

    @Override // androidx.activity.result.contract.ActivityResultContract
    /* renamed from: a */
    public Intent createIntent(Context context, Intent input) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(input, "input");
        return input;
    }

    @Override // androidx.activity.result.contract.ActivityResultContract
    /* renamed from: b */
    public d.a parseResult(int i10, Intent intent) {
        return new d.a(i10, intent);
    }
}
