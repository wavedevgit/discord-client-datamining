package com.mkuczera;

import android.os.Build;
import android.os.VibrationEffect;
import android.os.Vibrator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d implements b {

    /* renamed from: a  reason: collision with root package name */
    int f17894a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(int i10) {
        this.f17894a = i10;
    }

    @Override // com.mkuczera.b
    public void a(Vibrator vibrator) {
        if (Build.VERSION.SDK_INT >= 29) {
            try {
                if (vibrator.hasVibrator()) {
                    vibrator.vibrate(VibrationEffect.createPredefined(this.f17894a));
                }
            } catch (Exception unused) {
            }
        }
    }
}
