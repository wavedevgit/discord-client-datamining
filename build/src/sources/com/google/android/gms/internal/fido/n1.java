package com.google.android.gms.internal.fido;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class n1 extends c2 {

    /* renamed from: d  reason: collision with root package name */
    private final Object f14740d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f14741e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n1(Object obj) {
        this.f14740d = obj;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return !this.f14741e;
    }

    @Override // java.util.Iterator
    public final Object next() {
        if (!this.f14741e) {
            this.f14741e = true;
            return this.f14740d;
        }
        throw new NoSuchElementException();
    }
}
