package gr;

import android.text.SpannableStringBuilder;
import android.text.Spanned;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Deque;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class t implements Appendable, CharSequence {

    /* renamed from: d  reason: collision with root package name */
    private final StringBuilder f25203d;

    /* renamed from: e  reason: collision with root package name */
    private final Deque f25204e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final Object f25205a;

        /* renamed from: b  reason: collision with root package name */
        public int f25206b;

        /* renamed from: c  reason: collision with root package name */
        public int f25207c;

        /* renamed from: d  reason: collision with root package name */
        public final int f25208d;

        a(Object obj, int i10, int i11, int i12) {
            this.f25205a = obj;
            this.f25206b = i10;
            this.f25207c = i11;
            this.f25208d = i12;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b extends SpannableStringBuilder {
        b(CharSequence charSequence) {
            super(charSequence);
        }
    }

    public t() {
        this("");
    }

    private void e(int i10, CharSequence charSequence) {
        int i11;
        if (charSequence instanceof Spanned) {
            Spanned spanned = (Spanned) charSequence;
            boolean z10 = spanned instanceof b;
            Object[] spans = spanned.getSpans(0, spanned.length(), Object.class);
            if (spans != null) {
                i11 = spans.length;
            } else {
                i11 = 0;
            }
            if (i11 > 0) {
                if (z10) {
                    for (int i12 = i11 - 1; i12 >= 0; i12--) {
                        Object obj = spans[i12];
                        i(obj, spanned.getSpanStart(obj) + i10, spanned.getSpanEnd(obj) + i10, spanned.getSpanFlags(obj));
                    }
                    return;
                }
                for (int i13 = 0; i13 < i11; i13++) {
                    Object obj2 = spans[i13];
                    i(obj2, spanned.getSpanStart(obj2) + i10, spanned.getSpanEnd(obj2) + i10, spanned.getSpanFlags(obj2));
                }
            }
        }
    }

    static boolean g(int i10, int i11, int i12) {
        if (i12 > i11 && i11 >= 0 && i12 <= i10) {
            return true;
        }
        return false;
    }

    public static void j(t tVar, Object obj, int i10, int i11) {
        if (obj != null && g(tVar.length(), i10, i11)) {
            k(tVar, obj, i10, i11);
        }
    }

    private static void k(t tVar, Object obj, int i10, int i11) {
        if (obj != null) {
            if (obj.getClass().isArray()) {
                for (Object obj2 : (Object[]) obj) {
                    k(tVar, obj2, i10, i11);
                }
                return;
            }
            tVar.i(obj, i10, i11, 33);
        }
    }

    @Override // java.lang.Appendable
    /* renamed from: a */
    public t append(char c10) {
        this.f25203d.append(c10);
        return this;
    }

    @Override // java.lang.Appendable
    /* renamed from: b */
    public t append(CharSequence charSequence) {
        e(length(), charSequence);
        this.f25203d.append(charSequence);
        return this;
    }

    @Override // java.lang.Appendable
    /* renamed from: c */
    public t append(CharSequence charSequence, int i10, int i11) {
        CharSequence subSequence = charSequence.subSequence(i10, i11);
        e(length(), subSequence);
        this.f25203d.append(subSequence);
        return this;
    }

    @Override // java.lang.CharSequence
    public char charAt(int i10) {
        return this.f25203d.charAt(i10);
    }

    public t d(String str) {
        this.f25203d.append(str);
        return this;
    }

    public List f(int i10, int i11) {
        int i12;
        int length = length();
        if (!g(length, i10, i11)) {
            return Collections.EMPTY_LIST;
        }
        if (i10 == 0 && length == i11) {
            ArrayList arrayList = new ArrayList(this.f25204e);
            Collections.reverse(arrayList);
            return Collections.unmodifiableList(arrayList);
        }
        ArrayList arrayList2 = new ArrayList(0);
        Iterator descendingIterator = this.f25204e.descendingIterator();
        while (descendingIterator.hasNext()) {
            a aVar = (a) descendingIterator.next();
            int i13 = aVar.f25206b;
            if ((i13 >= i10 && i13 < i11) || (((i12 = aVar.f25207c) <= i11 && i12 > i10) || (i13 < i10 && i12 > i11))) {
                arrayList2.add(aVar);
            }
        }
        return Collections.unmodifiableList(arrayList2);
    }

    public char h() {
        return this.f25203d.charAt(length() - 1);
    }

    public t i(Object obj, int i10, int i11, int i12) {
        this.f25204e.push(new a(obj, i10, i11, i12));
        return this;
    }

    public SpannableStringBuilder l() {
        b bVar = new b(this.f25203d);
        for (a aVar : this.f25204e) {
            bVar.setSpan(aVar.f25205a, aVar.f25206b, aVar.f25207c, aVar.f25208d);
        }
        return bVar;
    }

    @Override // java.lang.CharSequence
    public int length() {
        return this.f25203d.length();
    }

    @Override // java.lang.CharSequence
    public CharSequence subSequence(int i10, int i11) {
        List<a> f10 = f(i10, i11);
        if (f10.isEmpty()) {
            return this.f25203d.subSequence(i10, i11);
        }
        SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder(this.f25203d.subSequence(i10, i11));
        int length = spannableStringBuilder.length();
        for (a aVar : f10) {
            int max = Math.max(0, aVar.f25206b - i10);
            spannableStringBuilder.setSpan(aVar.f25205a, max, Math.min(length, (aVar.f25207c - aVar.f25206b) + max), aVar.f25208d);
        }
        return spannableStringBuilder;
    }

    @Override // java.lang.CharSequence
    public String toString() {
        return this.f25203d.toString();
    }

    public t(CharSequence charSequence) {
        this.f25204e = new ArrayDeque(8);
        this.f25203d = new StringBuilder(charSequence);
        e(0, charSequence);
    }
}
