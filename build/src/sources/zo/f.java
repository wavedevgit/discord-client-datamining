package zo;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import androidx.activity.result.contract.ActivityResultContract;
import kotlin.jvm.internal.Intrinsics;
import zo.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends ActivityResultContract {
    @Override // androidx.activity.result.contract.ActivityResultContract
    /* renamed from: a */
    public Intent createIntent(Context context, e input) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(input, "input");
        Intent intent = new Intent(context, d.f55948a.a());
        intent.putExtra("EXTRA_NFC_READER_CONFIG", input);
        return intent;
    }

    @Override // androidx.activity.result.contract.ActivityResultContract
    /* renamed from: b */
    public k parseResult(int i10, Intent intent) {
        Bundle extras;
        k kVar;
        if (intent != null && (extras = intent.getExtras()) != null && (kVar = (k) w1.b.a(extras, "EXTRA_RESULT", k.class)) != null) {
            return kVar;
        }
        return new k.b("Unable to extract output from result intent.", k.c.f55961e);
    }
}
