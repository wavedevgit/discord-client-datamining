package com.google.firebase.installations;

import ui.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d extends j {

    /* renamed from: d  reason: collision with root package name */
    private final a f17237d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        BAD_CONFIG,
        UNAVAILABLE,
        TOO_MANY_REQUESTS
    }

    public d(a aVar) {
        this.f17237d = aVar;
    }

    public d(String str, a aVar) {
        super(str);
        this.f17237d = aVar;
    }
}
