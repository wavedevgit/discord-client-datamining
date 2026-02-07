package tt;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Collections;
import java.util.EnumMap;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o implements h {

    /* renamed from: d  reason: collision with root package name */
    private final rt.p f51096d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f51097e;

    /* renamed from: i  reason: collision with root package name */
    private final int f51098i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f51099o;

    /* renamed from: p  reason: collision with root package name */
    private final Locale f51100p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(rt.p pVar, Map map) {
        Map hashMap;
        Class type = pVar.getType();
        if (type.isEnum()) {
            if (map.size() >= type.getEnumConstants().length) {
                hashMap = b(type);
            } else {
                throw new IllegalArgumentException("Not enough text resources defined for enum: " + type.getName());
            }
        } else {
            hashMap = new HashMap(map.size());
        }
        hashMap.putAll(map);
        this.f51096d = pVar;
        this.f51097e = Collections.unmodifiableMap(hashMap);
        this.f51098i = 0;
        this.f51099o = true;
        this.f51100p = Locale.getDefault();
    }

    private static Map b(Class cls) {
        return new EnumMap(cls);
    }

    private String c(Object obj) {
        String str = (String) this.f51097e.get(obj);
        if (str == null) {
            return obj.toString();
        }
        return str;
    }

    private int h(rt.o oVar, Appendable appendable) {
        String c10 = c(oVar.s(this.f51096d));
        appendable.append(c10);
        return c10.length();
    }

    @Override // tt.h
    public void a(CharSequence charSequence, s sVar, rt.d dVar, t tVar, boolean z10) {
        int intValue;
        boolean booleanValue;
        Locale locale;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (z10) {
            intValue = this.f51098i;
        } else {
            intValue = ((Integer) dVar.b(st.a.f50176s, 0)).intValue();
        }
        if (intValue > 0) {
            length -= intValue;
        }
        if (f10 >= length) {
            sVar.k(f10, "Missing chars for: " + this.f51096d.name());
            sVar.n();
            return;
        }
        if (z10) {
            booleanValue = this.f51099o;
        } else {
            booleanValue = ((Boolean) dVar.b(st.a.f50166i, Boolean.TRUE)).booleanValue();
        }
        if (z10) {
            locale = this.f51100p;
        } else {
            locale = (Locale) dVar.b(st.a.f50160c, Locale.getDefault());
        }
        int i10 = length - f10;
        for (Object obj : this.f51097e.keySet()) {
            String c10 = c(obj);
            if (booleanValue) {
                String upperCase = c10.toUpperCase(locale);
                int length2 = c10.length();
                if (length2 <= i10) {
                    int i11 = length2 + f10;
                    if (upperCase.equals(charSequence.subSequence(f10, i11).toString().toUpperCase(locale))) {
                        tVar.I(this.f51096d, obj);
                        sVar.l(i11);
                        return;
                    }
                } else {
                    continue;
                }
            } else {
                int length3 = c10.length();
                if (length3 <= i10) {
                    int i12 = length3 + f10;
                    if (c10.equals(charSequence.subSequence(f10, i12).toString())) {
                        tVar.I(this.f51096d, obj);
                        sVar.l(i12);
                        return;
                    }
                } else {
                    continue;
                }
            }
        }
        sVar.k(f10, "Element value could not be parsed: " + this.f51096d.name());
    }

    @Override // tt.h
    public h d(rt.p pVar) {
        if (this.f51096d == pVar) {
            return this;
        }
        return new o(pVar, this.f51097e);
    }

    @Override // tt.h
    public h e(c cVar, rt.d dVar, int i10) {
        return new o(this.f51096d, this.f51097e, ((Integer) dVar.b(st.a.f50176s, 0)).intValue(), ((Boolean) dVar.b(st.a.f50166i, Boolean.TRUE)).booleanValue(), (Locale) dVar.b(st.a.f50160c, Locale.getDefault()));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof o) {
            o oVar = (o) obj;
            if (this.f51096d.equals(oVar.f51096d) && this.f51097e.equals(oVar.f51097e)) {
                return true;
            }
        }
        return false;
    }

    @Override // tt.h
    public int f(rt.o oVar, Appendable appendable, rt.d dVar, Set set, boolean z10) {
        if (appendable instanceof CharSequence) {
            CharSequence charSequence = (CharSequence) appendable;
            int length = charSequence.length();
            int h10 = h(oVar, appendable);
            if (set != null) {
                set.add(new g(this.f51096d, length, charSequence.length()));
            }
            return h10;
        }
        return h(oVar, appendable);
    }

    @Override // tt.h
    public boolean g() {
        return false;
    }

    @Override // tt.h
    public rt.p getElement() {
        return this.f51096d;
    }

    public int hashCode() {
        return (this.f51096d.hashCode() * 7) + (this.f51097e.hashCode() * 31);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        sb2.append(o.class.getName());
        sb2.append("[element=");
        sb2.append(this.f51096d.name());
        sb2.append(", resources=");
        sb2.append(this.f51097e);
        sb2.append(']');
        return sb2.toString();
    }

    private o(rt.p pVar, Map map, int i10, boolean z10, Locale locale) {
        this.f51096d = pVar;
        this.f51097e = map;
        this.f51098i = i10;
        this.f51099o = z10;
        this.f51100p = locale;
    }
}
