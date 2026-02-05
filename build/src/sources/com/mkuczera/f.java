package com.mkuczera;

import android.os.Vibrator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f implements b {

    /* renamed from: a  reason: collision with root package name */
    int f17270a;

    public f(int i10) {
        this.f17270a = i10;
    }

    @Override // com.mkuczera.b
    public void a(Vibrator vibrator) {
        try {
            if (vibrator.hasVibrator()) {
                vibrator.vibrate(this.f17270a);
            }
        } catch (Exception unused) {
        }
    }
}
