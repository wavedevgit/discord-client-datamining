package com.withpersona.sdk2.inquiry.shared.ui;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends y5.c {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ ThemeableLottieAnimationView f19576d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(ThemeableLottieAnimationView themeableLottieAnimationView) {
        this.f19576d = themeableLottieAnimationView;
    }

    @Override // y5.c
    /* renamed from: d */
    public Integer a(y5.b bVar) {
        Map map;
        Integer num;
        map = this.f19576d.A;
        if (bVar != null) {
            num = (Integer) bVar.g();
        } else {
            num = null;
        }
        Integer num2 = (Integer) map.get(num);
        if (num2 == null) {
            if (bVar == null) {
                return null;
            }
            return (Integer) bVar.b();
        }
        return num2;
    }
}
