package com.mkuczera;

import android.os.Vibrator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e implements b {

    /* renamed from: a  reason: collision with root package name */
    long[] f18138a;

    public e(long[] jArr) {
        this.f18138a = jArr;
    }

    @Override // com.mkuczera.b
    public void a(Vibrator vibrator) {
        try {
            if (vibrator.hasVibrator()) {
                vibrator.vibrate(this.f18138a, -1);
            }
        } catch (Exception unused) {
        }
    }
}
