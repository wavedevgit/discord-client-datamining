package androidx.activity.result.contract;

import android.content.Context;
import android.content.Intent;
import androidx.activity.result.contract.ActivityResultContract;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g extends ActivityResultContract {
    @Override // androidx.activity.result.contract.ActivityResultContract
    /* renamed from: a */
    public Intent createIntent(Context context, String input) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(input, "input");
        return f.f890a.a(new String[]{input});
    }

    @Override // androidx.activity.result.contract.ActivityResultContract
    /* renamed from: b */
    public ActivityResultContract.a getSynchronousResult(Context context, String input) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(input, "input");
        if (androidx.core.content.a.a(context, input) == 0) {
            return new ActivityResultContract.a(Boolean.TRUE);
        }
        return null;
    }

    @Override // androidx.activity.result.contract.ActivityResultContract
    /* renamed from: c */
    public Boolean parseResult(int i10, Intent intent) {
        if (intent != null && i10 == -1) {
            int[] intArrayExtra = intent.getIntArrayExtra("androidx.activity.result.contract.extra.PERMISSION_GRANT_RESULTS");
            boolean z10 = false;
            if (intArrayExtra != null) {
                int length = intArrayExtra.length;
                int i11 = 0;
                while (true) {
                    if (i11 >= length) {
                        break;
                    } else if (intArrayExtra[i11] == 0) {
                        z10 = true;
                        break;
                    } else {
                        i11++;
                    }
                }
            }
            return Boolean.valueOf(z10);
        }
        return Boolean.FALSE;
    }
}
