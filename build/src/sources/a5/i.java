package a5;

import a5.h;
import android.webkit.MimeTypeMap;
import g5.m;
import java.io.File;
import ju.c0;
import kotlin.coroutines.Continuation;
import x4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i implements h {

    /* renamed from: a  reason: collision with root package name */
    private final File f397a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements h.a {
        @Override // a5.h.a
        /* renamed from: b */
        public h a(File file, m mVar, v4.h hVar) {
            return new i(file);
        }
    }

    public i(File file) {
        this.f397a = file;
    }

    @Override // a5.h
    public Object a(Continuation continuation) {
        return new l(u.h(c0.a.d(c0.f32326e, this.f397a, false, 1, null), null, null, null, 14, null), MimeTypeMap.getSingleton().getMimeTypeFromExtension(ur.j.s(this.f397a)), x4.h.f53392i);
    }
}
