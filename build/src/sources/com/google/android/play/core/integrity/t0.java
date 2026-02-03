package com.google.android.play.core.integrity;

import com.google.android.play.core.integrity.c;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t0 extends c.d.a {

    /* renamed from: a  reason: collision with root package name */
    private String f15839a;

    /* renamed from: b  reason: collision with root package name */
    private Set f15840b;

    @Override // com.google.android.play.core.integrity.c.d.a
    public final c.d a() {
        Set set = this.f15840b;
        if (set != null) {
            return new u0(this.f15839a, set, null);
        }
        throw new IllegalStateException("Missing required properties: verdictOptOut");
    }

    @Override // com.google.android.play.core.integrity.c.d.a
    public final c.d.a b(String str) {
        this.f15839a = str;
        return this;
    }

    public final c.d.a c(Set set) {
        if (set != null) {
            this.f15840b = set;
            return this;
        }
        throw new NullPointerException("Null verdictOptOut");
    }
}
