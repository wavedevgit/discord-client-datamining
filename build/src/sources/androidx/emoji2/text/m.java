package androidx.emoji2.text;

import android.graphics.Typeface;
import android.util.SparseArray;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final c3.b f4132a;

    /* renamed from: b  reason: collision with root package name */
    private final char[] f4133b;

    /* renamed from: c  reason: collision with root package name */
    private final a f4134c = new a(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);

    /* renamed from: d  reason: collision with root package name */
    private final Typeface f4135d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final SparseArray f4136a;

        /* renamed from: b  reason: collision with root package name */
        private o f4137b;

        private a() {
            this(1);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public a a(int i10) {
            SparseArray sparseArray = this.f4136a;
            if (sparseArray == null) {
                return null;
            }
            return (a) sparseArray.get(i10);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public final o b() {
            return this.f4137b;
        }

        void c(o oVar, int i10, int i11) {
            a a10 = a(oVar.b(i10));
            if (a10 == null) {
                a10 = new a();
                this.f4136a.put(oVar.b(i10), a10);
            }
            if (i11 > i10) {
                a10.c(oVar, i10 + 1, i11);
            } else {
                a10.f4137b = oVar;
            }
        }

        a(int i10) {
            this.f4136a = new SparseArray(i10);
        }
    }

    private m(Typeface typeface, c3.b bVar) {
        this.f4135d = typeface;
        this.f4132a = bVar;
        this.f4133b = new char[bVar.k() * 2];
        a(bVar);
    }

    private void a(c3.b bVar) {
        int k10 = bVar.k();
        for (int i10 = 0; i10 < k10; i10++) {
            o oVar = new o(this, i10);
            Character.toChars(oVar.f(), this.f4133b, i10 * 2);
            h(oVar);
        }
    }

    public static m b(Typeface typeface, ByteBuffer byteBuffer) {
        try {
            w1.i.a("EmojiCompat.MetadataRepo.create");
            return new m(typeface, l.b(byteBuffer));
        } finally {
            w1.i.b();
        }
    }

    public char[] c() {
        return this.f4133b;
    }

    public c3.b d() {
        return this.f4132a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f4132a.l();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a f() {
        return this.f4134c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Typeface g() {
        return this.f4135d;
    }

    void h(o oVar) {
        boolean z10;
        b2.e.h(oVar, "emoji metadata cannot be null");
        if (oVar.c() > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.b(z10, "invalid metadata codepoint length");
        this.f4134c.c(oVar, 0, oVar.c() - 1);
    }
}
