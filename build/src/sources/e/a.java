package e;

import android.content.Context;
import android.content.Intent;
import androidx.activity.result.contract.ActivityResultContract;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends ActivityResultContract {

    /* renamed from: a  reason: collision with root package name */
    public static final C0274a f21202a = new C0274a(null);

    /* renamed from: e.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0274a {
        public /* synthetic */ C0274a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0274a() {
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
