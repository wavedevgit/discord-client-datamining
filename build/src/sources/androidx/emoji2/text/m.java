package androidx.emoji2.text;

import android.graphics.Typeface;
import android.util.SparseArray;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final c3.b f4461a;

    /* renamed from: b  reason: collision with root package name */
    private final char[] f4462b;

    /* renamed from: c  reason: collision with root package name */
    private final a f4463c = new a(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);

    /* renamed from: d  reason: collision with root package name */
    private final Typeface f4464d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final SparseArray f4465a;

        /* renamed from: b  reason: collision with root package name */
        private o f4466b;

        private a() {
            this(1);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public a a(int i10) {
            SparseArray sparseArray = this.f4465a;
            if (sparseArray == null) {
                return null;
            }
            return (a) sparseArray.get(i10);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public final o b() {
            return this.f4466b;
        }

        void c(o oVar, int i10, int i11) {
            a a10 = a(oVar.b(i10));
            if (a10 == null) {
                a10 = new a();
                this.f4465a.put(oVar.b(i10), a10);
            }
            if (i11 > i10) {
                a10.c(oVar, i10 + 1, i11);
            } else {
                a10.f4466b = oVar;
            }
        }

        a(int i10) {
            this.f4465a = new SparseArray(i10);
        }
    }

    private m(Typeface typeface, c3.b bVar) {
        this.f4464d = typeface;
        this.f4461a = bVar;
        this.f4462b = new char[bVar.k() * 2];
        a(bVar);
    }

    private void a(c3.b bVar) {
        int k10 = bVar.k();
        for (int i10 = 0; i10 < k10; i10++) {
            o oVar = new o(this, i10);
            Character.toChars(oVar.f(), this.f4462b, i10 * 2);
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
        return this.f4462b;
    }

    public c3.b d() {
        return this.f4461a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f4461a.l();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a f() {
        return this.f4463c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Typeface g() {
        return this.f4464d;
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
        this.f4463c.c(oVar, 0, oVar.c() - 1);
    }
}
