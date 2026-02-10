package vf;

import android.app.Activity;
import ff.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a.g f52337a;

    static {
        a.g gVar = new a.g();
        f52337a = gVar;
        new ff.a("Fido.U2F_ZERO_PARTY_API", new com.google.android.gms.internal.fido.b(), gVar);
    }

    public static wf.a a(Activity activity) {
        return new wf.a(activity);
    }
}
