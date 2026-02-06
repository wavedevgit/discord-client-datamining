package com.google.android.play.core.integrity;

import com.google.android.play.core.integrity.c;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class u0 extends c.d {

    /* renamed from: a  reason: collision with root package name */
    private final String f16215a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f16216b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ u0(String str, Set set, ai.g gVar) {
        this.f16215a = str;
        this.f16216b = set;
    }

    @Override // com.google.android.play.core.integrity.c.d
    public final String b() {
        return this.f16215a;
    }

    @Override // com.google.android.play.core.integrity.c.d
    public final Set c() {
        return this.f16216b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof c.d) {
            c.d dVar = (c.d) obj;
            String str = this.f16215a;
            if (str != null ? str.equals(dVar.b()) : dVar.b() == null) {
                if (this.f16216b.equals(dVar.c())) {
                    return true;
                }
            }
        }
        return false;
    }

    public final int hashCode() {
        int hashCode;
        String str = this.f16215a;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return ((hashCode ^ 1000003) * 1000003) ^ this.f16216b.hashCode();
    }

    public final String toString() {
        String obj = this.f16216b.toString();
        return "StandardIntegrityTokenRequest{requestHash=" + this.f16215a + ", verdictOptOut=" + obj + "}";
    }
}
