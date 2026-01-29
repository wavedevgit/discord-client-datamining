package com.google.android.play.core.integrity;

import com.google.android.gms.common.api.Status;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends ef.b {

    /* renamed from: e  reason: collision with root package name */
    private final Throwable f17145e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(int i10, Throwable th2) {
        super(new Status(i10, String.format(Locale.ROOT, "Integrity API error (%d): %s.", Integer.valueOf(i10), xh.a.a(i10))));
        if (i10 != 0) {
            this.f17145e = th2;
            return;
        }
        throw new IllegalArgumentException("ErrorCode should not be 0.");
    }

    @Override // java.lang.Throwable
    public final synchronized Throwable getCause() {
        return this.f17145e;
    }
}
