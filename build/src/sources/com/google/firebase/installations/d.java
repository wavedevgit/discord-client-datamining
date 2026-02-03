package com.google.firebase.installations;

import ni.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d extends j {

    /* renamed from: d  reason: collision with root package name */
    private final a f15974d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        BAD_CONFIG,
        UNAVAILABLE,
        TOO_MANY_REQUESTS
    }

    public d(a aVar) {
        this.f15974d = aVar;
    }

    public d(String str, a aVar) {
        super(str);
        this.f15974d = aVar;
    }
}
