package ot;

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
    private final mt.p f44736d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f44737e;

    /* renamed from: i  reason: collision with root package name */
    private final int f44738i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f44739o;

    /* renamed from: p  reason: collision with root package name */
    private final Locale f44740p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(mt.p pVar, Map map) {
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
        this.f44736d = pVar;
        this.f44737e = Collections.unmodifiableMap(hashMap);
        this.f44738i = 0;
        this.f44739o = true;
        this.f44740p = Locale.getDefault();
    }

    private static Map b(Class cls) {
        return new EnumMap(cls);
    }

    private String c(Object obj) {
        String str = (String) this.f44737e.get(obj);
        if (str == null) {
            return obj.toString();
        }
        return str;
    }

    private int h(mt.o oVar, Appendable appendable) {
        String c10 = c(oVar.o(this.f44736d));
        appendable.append(c10);
        return c10.length();
    }

    @Override // ot.h
    public int a(mt.o oVar, Appendable appendable, mt.d dVar, Set set, boolean z10) {
        if (appendable instanceof CharSequence) {
            CharSequence charSequence = (CharSequence) appendable;
            int length = charSequence.length();
            int h10 = h(oVar, appendable);
            if (set != null) {
                set.add(new g(this.f44736d, length, charSequence.length()));
            }
            return h10;
        }
        return h(oVar, appendable);
    }

    @Override // ot.h
    public h d(c cVar, mt.d dVar, int i10) {
        return new o(this.f44736d, this.f44737e, ((Integer) dVar.b(nt.a.f42044s, 0)).intValue(), ((Boolean) dVar.b(nt.a.f42034i, Boolean.TRUE)).booleanValue(), (Locale) dVar.b(nt.a.f42028c, Locale.getDefault()));
    }

    @Override // ot.h
    public h e(mt.p pVar) {
        if (this.f44736d == pVar) {
            return this;
        }
        return new o(pVar, this.f44737e);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof o) {
            o oVar = (o) obj;
            if (this.f44736d.equals(oVar.f44736d) && this.f44737e.equals(oVar.f44737e)) {
                return true;
            }
        }
        return false;
    }

    @Override // ot.h
    public boolean f() {
        return false;
    }

    @Override // ot.h
    public void g(CharSequence charSequence, s sVar, mt.d dVar, t tVar, boolean z10) {
        int intValue;
        boolean booleanValue;
        Locale locale;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (z10) {
            intValue = this.f44738i;
        } else {
            intValue = ((Integer) dVar.b(nt.a.f42044s, 0)).intValue();
        }
        if (intValue > 0) {
            length -= intValue;
        }
        if (f10 >= length) {
            sVar.k(f10, "Missing chars for: " + this.f44736d.name());
            sVar.n();
            return;
        }
        if (z10) {
            booleanValue = this.f44739o;
        } else {
            booleanValue = ((Boolean) dVar.b(nt.a.f42034i, Boolean.TRUE)).booleanValue();
        }
        if (z10) {
            locale = this.f44740p;
        } else {
            locale = (Locale) dVar.b(nt.a.f42028c, Locale.getDefault());
        }
        int i10 = length - f10;
        for (Object obj : this.f44737e.keySet()) {
            String c10 = c(obj);
            if (booleanValue) {
                String upperCase = c10.toUpperCase(locale);
                int length2 = c10.length();
                if (length2 <= i10) {
                    int i11 = length2 + f10;
                    if (upperCase.equals(charSequence.subSequence(f10, i11).toString().toUpperCase(locale))) {
                        tVar.I(this.f44736d, obj);
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
                        tVar.I(this.f44736d, obj);
                        sVar.l(i12);
                        return;
                    }
                } else {
                    continue;
                }
            }
        }
        sVar.k(f10, "Element value could not be parsed: " + this.f44736d.name());
    }

    @Override // ot.h
    public mt.p getElement() {
        return this.f44736d;
    }

    public int hashCode() {
        return (this.f44736d.hashCode() * 7) + (this.f44737e.hashCode() * 31);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        sb2.append(o.class.getName());
        sb2.append("[element=");
        sb2.append(this.f44736d.name());
        sb2.append(", resources=");
        sb2.append(this.f44737e);
        sb2.append(']');
        return sb2.toString();
    }

    private o(mt.p pVar, Map map, int i10, boolean z10, Locale locale) {
        this.f44736d = pVar;
        this.f44737e = map;
        this.f44738i = i10;
        this.f44739o = z10;
        this.f44740p = locale;
    }
}
