package androidx.core.content;

import android.content.LocusId;
import android.os.Build;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final String f3239a;

    /* renamed from: b  reason: collision with root package name */
    private final LocusId f3240b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a {
        static LocusId a(String str) {
            return new LocusId(str);
        }

        static String b(LocusId locusId) {
            return locusId.getId();
        }
    }

    public c(String str) {
        this.f3239a = (String) b2.e.k(str, "id cannot be empty");
        if (Build.VERSION.SDK_INT >= 29) {
            this.f3240b = a.a(str);
        } else {
            this.f3240b = null;
        }
    }

    private String b() {
        int length = this.f3239a.length();
        return length + "_chars";
    }

    public static c d(LocusId locusId) {
        b2.e.h(locusId, "locusId cannot be null");
        return new c((String) b2.e.k(a.b(locusId), "id cannot be empty"));
    }

    public String a() {
        return this.f3239a;
    }

    public LocusId c() {
        return this.f3240b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || c.class != obj.getClass()) {
            return false;
        }
        c cVar = (c) obj;
        String str = this.f3239a;
        if (str == null) {
            if (cVar.f3239a == null) {
                return true;
            }
            return false;
        }
        return str.equals(cVar.f3239a);
    }

    public int hashCode() {
        int hashCode;
        String str = this.f3239a;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return 31 + hashCode;
    }

    public String toString() {
        return "LocusIdCompat[" + b() + "]";
    }
}
