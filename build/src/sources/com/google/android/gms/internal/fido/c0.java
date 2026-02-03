package com.google.android.gms.internal.fido;

import java.io.IOException;
import java.util.Iterator;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f13575a = ",\n  ";

    private c0(String str) {
    }

    public static c0 a(String str) {
        return new c0(",\n  ");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static final CharSequence d(Object obj) {
        Objects.requireNonNull(obj);
        if (obj instanceof CharSequence) {
            return (CharSequence) obj;
        }
        return obj.toString();
    }

    public final StringBuilder c(StringBuilder sb2, Iterator it) {
        try {
            if (it.hasNext()) {
                sb2.append(d(it.next()));
                while (it.hasNext()) {
                    sb2.append((CharSequence) this.f13575a);
                    sb2.append(d(it.next()));
                }
            }
            return sb2;
        } catch (IOException e10) {
            throw new AssertionError(e10);
        }
    }
}
