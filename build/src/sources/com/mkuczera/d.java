package com.mkuczera;

import android.os.Build;
import android.os.VibrationEffect;
import android.os.Vibrator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d implements b {

    /* renamed from: a  reason: collision with root package name */
    int f17248a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(int i10) {
        this.f17248a = i10;
    }

    @Override // com.mkuczera.b
    public void a(Vibrator vibrator) {
        if (Build.VERSION.SDK_INT >= 29) {
            try {
                if (vibrator.hasVibrator()) {
                    vibrator.vibrate(VibrationEffect.createPredefined(this.f17248a));
                }
            } catch (Exception unused) {
            }
        }
    }
}
