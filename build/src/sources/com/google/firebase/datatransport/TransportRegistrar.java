package com.google.firebase.datatransport;

import ac.t;
import android.content.Context;
import androidx.annotation.Keep;
import androidx.annotation.NonNull;
import com.google.android.datatransport.cct.a;
import com.google.firebase.components.ComponentRegistrar;
import com.google.firebase.datatransport.TransportRegistrar;
import java.util.Arrays;
import java.util.List;
import oj.h;
import vi.c;
import vi.d;
import vi.d0;
import vi.g;
import vi.q;
import xi.b;
import yb.i;
@Keep
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class TransportRegistrar implements ComponentRegistrar {
    private static final String LIBRARY_NAME = "fire-transport";

    public static /* synthetic */ i a(d dVar) {
        t.f((Context) dVar.a(Context.class));
        return t.c().g(a.f11658g);
    }

    public static /* synthetic */ i b(d dVar) {
        t.f((Context) dVar.a(Context.class));
        return t.c().g(a.f11659h);
    }

    public static /* synthetic */ i c(d dVar) {
        t.f((Context) dVar.a(Context.class));
        return t.c().g(a.f11659h);
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    @NonNull
    public List<c> getComponents() {
        return Arrays.asList(c.c(i.class).g(LIBRARY_NAME).b(q.j(Context.class)).e(new g() { // from class: xi.c
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return TransportRegistrar.c(dVar);
            }
        }).d(), c.e(d0.a(xi.a.class, i.class)).b(q.j(Context.class)).e(new g() { // from class: xi.d
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return TransportRegistrar.b(dVar);
            }
        }).d(), c.e(d0.a(b.class, i.class)).b(q.j(Context.class)).e(new g() { // from class: xi.e
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return TransportRegistrar.a(dVar);
            }
        }).d(), h.b(LIBRARY_NAME, "18.2.0"));
    }
}
