package com.mkuczera;

import android.os.Vibrator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f implements b {

    /* renamed from: a  reason: collision with root package name */
    int f17250a;

    public f(int i10) {
        this.f17250a = i10;
    }

    @Override // com.mkuczera.b
    public void a(Vibrator vibrator) {
        try {
            if (vibrator.hasVibrator()) {
                vibrator.vibrate(this.f17250a);
            }
        } catch (Exception unused) {
        }
    }
}
