package androidx.emoji2.text;

import android.text.Editable;
import android.text.Selection;
import android.text.Spannable;
import android.text.SpannableString;
import android.text.TextUtils;
import android.text.method.MetaKeyKeyListener;
import android.view.KeyEvent;
import android.view.inputmethod.InputConnection;
import androidx.emoji2.text.e;
import androidx.emoji2.text.m;
import java.util.Arrays;
import java.util.Iterator;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final e.j f4425a;

    /* renamed from: b  reason: collision with root package name */
    private final m f4426b;

    /* renamed from: c  reason: collision with root package name */
    private e.InterfaceC0050e f4427c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f4428d;

    /* renamed from: e  reason: collision with root package name */
    private final int[] f4429e;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        static int a(CharSequence charSequence, int i10, int i11) {
            int length = charSequence.length();
            if (i10 < 0 || length < i10 || i11 < 0) {
                return -1;
            }
            while (true) {
                boolean z10 = false;
                while (i11 != 0) {
                    i10--;
                    if (i10 < 0) {
                        if (z10) {
                            return -1;
                        }
                        return 0;
                    }
                    char charAt = charSequence.charAt(i10);
                    if (z10) {
                        if (!Character.isHighSurrogate(charAt)) {
                            return -1;
                        }
                        i11--;
                    } else if (!Character.isSurrogate(charAt)) {
                        i11--;
                    } else if (Character.isHighSurrogate(charAt)) {
                        return -1;
                    } else {
                        z10 = true;
                    }
                }
                return i10;
            }
        }

        static int b(CharSequence charSequence, int i10, int i11) {
            int length = charSequence.length();
            if (i10 < 0 || length < i10 || i11 < 0) {
                return -1;
            }
            while (true) {
                boolean z10 = false;
                while (i11 != 0) {
                    if (i10 >= length) {
                        if (z10) {
                            return -1;
                        }
                        return length;
                    }
                    char charAt = charSequence.charAt(i10);
                    if (z10) {
                        if (!Character.isLowSurrogate(charAt)) {
                            return -1;
                        }
                        i11--;
                        i10++;
                    } else if (!Character.isSurrogate(charAt)) {
                        i11--;
                        i10++;
                    } else if (Character.isLowSurrogate(charAt)) {
                        return -1;
                    } else {
                        i10++;
                        z10 = true;
                    }
                }
                return i10;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements c {

        /* renamed from: a  reason: collision with root package name */
        public q f4430a;

        /* renamed from: b  reason: collision with root package name */
        private final e.j f4431b;

        b(q qVar, e.j jVar) {
            this.f4430a = qVar;
            this.f4431b = jVar;
        }

        @Override // androidx.emoji2.text.h.c
        public boolean a(CharSequence charSequence, int i10, int i11, o oVar) {
            Spannable spannableString;
            if (oVar.k()) {
                return true;
            }
            if (this.f4430a == null) {
                if (charSequence instanceof Spannable) {
                    spannableString = (Spannable) charSequence;
                } else {
                    spannableString = new SpannableString(charSequence);
                }
                this.f4430a = new q(spannableString);
            }
            this.f4430a.setSpan(this.f4431b.a(oVar), i10, i11, 33);
            return true;
        }

        @Override // androidx.emoji2.text.h.c
        /* renamed from: b */
        public q getResult() {
            return this.f4430a;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface c {
        boolean a(CharSequence charSequence, int i10, int i11, o oVar);

        Object getResult();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d implements c {

        /* renamed from: a  reason: collision with root package name */
        private final String f4432a;

        d(String str) {
            this.f4432a = str;
        }

        @Override // androidx.emoji2.text.h.c
        public boolean a(CharSequence charSequence, int i10, int i11, o oVar) {
            if (!TextUtils.equals(charSequence.subSequence(i10, i11), this.f4432a)) {
                return true;
            }
            oVar.l(true);
            return false;
        }

        @Override // androidx.emoji2.text.h.c
        /* renamed from: b */
        public d getResult() {
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        private int f4433a = 1;

        /* renamed from: b  reason: collision with root package name */
        private final m.a f4434b;

        /* renamed from: c  reason: collision with root package name */
        private m.a f4435c;

        /* renamed from: d  reason: collision with root package name */
        private m.a f4436d;

        /* renamed from: e  reason: collision with root package name */
        private int f4437e;

        /* renamed from: f  reason: collision with root package name */
        private int f4438f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f4439g;

        /* renamed from: h  reason: collision with root package name */
        private final int[] f4440h;

        e(m.a aVar, boolean z10, int[] iArr) {
            this.f4434b = aVar;
            this.f4435c = aVar;
            this.f4439g = z10;
            this.f4440h = iArr;
        }

        private static boolean d(int i10) {
            return i10 == 65039;
        }

        private static boolean f(int i10) {
            return i10 == 65038;
        }

        private int g() {
            this.f4433a = 1;
            this.f4435c = this.f4434b;
            this.f4438f = 0;
            return 1;
        }

        private boolean h() {
            if (this.f4435c.b().j() || d(this.f4437e)) {
                return true;
            }
            if (this.f4439g) {
                if (this.f4440h == null) {
                    return true;
                }
                if (Arrays.binarySearch(this.f4440h, this.f4435c.b().b(0)) < 0) {
                    return true;
                }
            }
            return false;
        }

        int a(int i10) {
            m.a a10 = this.f4435c.a(i10);
            int i11 = 2;
            if (this.f4433a != 2) {
                if (a10 == null) {
                    i11 = g();
                } else {
                    this.f4433a = 2;
                    this.f4435c = a10;
                    this.f4438f = 1;
                }
            } else if (a10 != null) {
                this.f4435c = a10;
                this.f4438f++;
            } else if (f(i10)) {
                i11 = g();
            } else if (!d(i10)) {
                if (this.f4435c.b() != null) {
                    i11 = 3;
                    if (this.f4438f == 1) {
                        if (h()) {
                            this.f4436d = this.f4435c;
                            g();
                        } else {
                            i11 = g();
                        }
                    } else {
                        this.f4436d = this.f4435c;
                        g();
                    }
                } else {
                    i11 = g();
                }
            }
            this.f4437e = i10;
            return i11;
        }

        o b() {
            return this.f4435c.b();
        }

        o c() {
            return this.f4436d.b();
        }

        boolean e() {
            if (this.f4433a == 2 && this.f4435c.b() != null) {
                if (this.f4438f > 1 || h()) {
                    return true;
                }
                return false;
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(m mVar, e.j jVar, e.InterfaceC0050e interfaceC0050e, boolean z10, int[] iArr, Set set) {
        this.f4425a = jVar;
        this.f4426b = mVar;
        this.f4427c = interfaceC0050e;
        this.f4428d = z10;
        this.f4429e = iArr;
        g(set);
    }

    private static boolean a(Editable editable, KeyEvent keyEvent, boolean z10) {
        i[] iVarArr;
        if (f(keyEvent)) {
            return false;
        }
        int selectionStart = Selection.getSelectionStart(editable);
        int selectionEnd = Selection.getSelectionEnd(editable);
        if (!e(selectionStart, selectionEnd) && (iVarArr = (i[]) editable.getSpans(selectionStart, selectionEnd, i.class)) != null && iVarArr.length > 0) {
            for (i iVar : iVarArr) {
                int spanStart = editable.getSpanStart(iVar);
                int spanEnd = editable.getSpanEnd(iVar);
                if ((z10 && spanStart == selectionStart) || ((!z10 && spanEnd == selectionStart) || (selectionStart > spanStart && selectionStart < spanEnd))) {
                    editable.delete(spanStart, spanEnd);
                    return true;
                }
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean b(InputConnection inputConnection, Editable editable, int i10, int i11, boolean z10) {
        int max;
        int min;
        if (editable != null && inputConnection != null && i10 >= 0 && i11 >= 0) {
            int selectionStart = Selection.getSelectionStart(editable);
            int selectionEnd = Selection.getSelectionEnd(editable);
            if (e(selectionStart, selectionEnd)) {
                return false;
            }
            if (z10) {
                max = a.a(editable, selectionStart, Math.max(i10, 0));
                min = a.b(editable, selectionEnd, Math.max(i11, 0));
                if (max == -1 || min == -1) {
                    return false;
                }
            } else {
                max = Math.max(selectionStart - i10, 0);
                min = Math.min(selectionEnd + i11, editable.length());
            }
            i[] iVarArr = (i[]) editable.getSpans(max, min, i.class);
            if (iVarArr != null && iVarArr.length > 0) {
                for (i iVar : iVarArr) {
                    int spanStart = editable.getSpanStart(iVar);
                    int spanEnd = editable.getSpanEnd(iVar);
                    max = Math.min(spanStart, max);
                    min = Math.max(spanEnd, min);
                }
                int max2 = Math.max(max, 0);
                int min2 = Math.min(min, editable.length());
                inputConnection.beginBatchEdit();
                editable.delete(max2, min2);
                inputConnection.endBatchEdit();
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c(Editable editable, int i10, KeyEvent keyEvent) {
        boolean a10;
        if (i10 != 67) {
            if (i10 != 112) {
                a10 = false;
            } else {
                a10 = a(editable, keyEvent, true);
            }
        } else {
            a10 = a(editable, keyEvent, false);
        }
        if (!a10) {
            return false;
        }
        MetaKeyKeyListener.adjustMetaAfterKeypress(editable);
        return true;
    }

    private boolean d(CharSequence charSequence, int i10, int i11, o oVar) {
        if (oVar.d() == 0) {
            oVar.m(this.f4427c.a(charSequence, i10, i11, oVar.h()));
        }
        if (oVar.d() == 2) {
            return true;
        }
        return false;
    }

    private static boolean e(int i10, int i11) {
        return i10 == -1 || i11 == -1 || i10 != i11;
    }

    private static boolean f(KeyEvent keyEvent) {
        return !KeyEvent.metaStateHasNoModifiers(keyEvent.getMetaState());
    }

    private void g(Set set) {
        if (!set.isEmpty()) {
            Iterator it = set.iterator();
            while (it.hasNext()) {
                int[] iArr = (int[]) it.next();
                String str = new String(iArr, 0, iArr.length);
                i(str, 0, str.length(), 1, true, new d(str));
            }
        }
    }

    private Object i(CharSequence charSequence, int i10, int i11, int i12, boolean z10, c cVar) {
        int i13;
        e eVar = new e(this.f4426b.f(), this.f4428d, this.f4429e);
        int i14 = 0;
        boolean z11 = true;
        int codePointAt = Character.codePointAt(charSequence, i10);
        loop0: while (true) {
            i13 = i10;
            while (i10 < i11 && i14 < i12 && z11) {
                int a10 = eVar.a(codePointAt);
                if (a10 != 1) {
                    if (a10 != 2) {
                        if (a10 == 3) {
                            if (z10 || !d(charSequence, i13, i10, eVar.c())) {
                                z11 = cVar.a(charSequence, i13, i10, eVar.c());
                                i14++;
                            }
                        }
                    } else {
                        i10 += Character.charCount(codePointAt);
                        if (i10 < i11) {
                            codePointAt = Character.codePointAt(charSequence, i10);
                        }
                    }
                } else {
                    i13 += Character.charCount(Character.codePointAt(charSequence, i13));
                    if (i13 < i11) {
                        codePointAt = Character.codePointAt(charSequence, i13);
                    }
                    i10 = i13;
                }
            }
        }
        if (eVar.e() && i14 < i12 && z11 && (z10 || !d(charSequence, i13, i10, eVar.b()))) {
            cVar.a(charSequence, i13, i10, eVar.b());
        }
        return cVar.getResult();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:28:0x004b A[Catch: all -> 0x002a, TryCatch #2 {all -> 0x002a, blocks: (B:7:0x000e, B:10:0x0013, B:12:0x0017, B:14:0x0024, B:22:0x003c, B:24:0x0044, B:26:0x0047, B:28:0x004b, B:30:0x0057, B:31:0x005a, B:41:0x0078), top: B:70:0x000e }] */
    /* JADX WARN: Removed duplicated region for block: B:61:0x00b5  */
    /* JADX WARN: Removed duplicated region for block: B:62:0x00b9 A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:64:0x00bc  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.CharSequence h(java.lang.CharSequence r11, int r12, int r13, int r14, boolean r15) {
        /*
            Method dump skipped, instructions count: 195
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.emoji2.text.h.h(java.lang.CharSequence, int, int, int, boolean):java.lang.CharSequence");
    }
}
