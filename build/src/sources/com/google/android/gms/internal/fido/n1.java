package com.google.android.gms.internal.fido;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class n1 extends c2 {

    /* renamed from: d  reason: collision with root package name */
    private final Object f13666d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f13667e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n1(Object obj) {
        this.f13666d = obj;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return !this.f13667e;
    }

    @Override // java.util.Iterator
    public final Object next() {
        if (!this.f13667e) {
            this.f13667e = true;
            return this.f13666d;
        }
        throw new NoSuchElementException();
    }
}
