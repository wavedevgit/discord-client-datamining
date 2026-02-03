package com.henninghall.date_picker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    private final n f17251a;

    public g(n nVar) {
        this.f17251a = nVar;
    }

    private String a(String str) {
        return " " + str + " ";
    }

    private boolean c(String str) {
        if (str.length() == 1) {
            return true;
        }
        return false;
    }

    public String b(String str) {
        if (!c(str)) {
            return str;
        }
        return a(str);
    }
}
