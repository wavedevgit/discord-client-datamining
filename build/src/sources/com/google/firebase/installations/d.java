package com.google.firebase.installations;

import qi.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d extends j {

    /* renamed from: d  reason: collision with root package name */
    private final a f16368d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        BAD_CONFIG,
        UNAVAILABLE,
        TOO_MANY_REQUESTS
    }

    public d(a aVar) {
        this.f16368d = aVar;
    }

    public d(String str, a aVar) {
        super(str);
        this.f16368d = aVar;
    }
}
