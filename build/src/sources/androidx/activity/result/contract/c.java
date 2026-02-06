package androidx.activity.result.contract;

import android.content.Context;
import android.content.Intent;
import androidx.activity.result.contract.ActivityResultContract;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends ActivityResultContract {
    @Override // androidx.activity.result.contract.ActivityResultContract
    /* renamed from: a */
    public Intent createIntent(Context context, String[] input) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(input, "input");
        Intent type = new Intent("android.intent.action.OPEN_DOCUMENT").putExtra("android.intent.extra.MIME_TYPES", input).putExtra("android.intent.extra.ALLOW_MULTIPLE", true).setType("*/*");
        Intrinsics.checkNotNullExpressionValue(type, "Intent(Intent.ACTION_OPE…          .setType(\"*/*\")");
        return type;
    }

    @Override // androidx.activity.result.contract.ActivityResultContract
    /* renamed from: b */
    public final ActivityResultContract.a getSynchronousResult(Context context, String[] input) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(input, "input");
        return null;
    }

    @Override // androidx.activity.result.contract.ActivityResultContract
    /* renamed from: c */
    public final List parseResult(int i10, Intent intent) {
        List a10;
        if (i10 != -1) {
            intent = null;
        }
        if (intent != null && (a10 = a.f1335a.a(intent)) != null) {
            return a10;
        }
        return CollectionsKt.l();
    }
}
