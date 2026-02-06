package cp;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.contract.ActivityResultContract;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends ActivityResultContract {
        a() {
        }

        @Override // androidx.activity.result.contract.ActivityResultContract
        /* renamed from: a */
        public Intent createIntent(Context context, cp.a input) {
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(input, "input");
            Intent intent = input.a().f2335a;
            Intrinsics.checkNotNullExpressionValue(intent, "intent");
            intent.setData(Uri.parse(input.b()));
            return intent;
        }

        @Override // androidx.activity.result.contract.ActivityResultContract
        /* renamed from: b */
        public Integer parseResult(int i10, Intent intent) {
            return Integer.valueOf(i10);
        }
    }

    public static final f0 b() {
        return new f0(new a(), new ActivityResultCallback() { // from class: cp.c
            @Override // androidx.activity.result.ActivityResultCallback
            public final void a(Object obj) {
                d.c(((Integer) obj).intValue());
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(int i10) {
        new f().a(i10);
    }
}
