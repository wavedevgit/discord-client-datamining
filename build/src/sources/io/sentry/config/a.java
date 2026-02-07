package io.sentry.config;

import io.sentry.util.f0;
import io.sentry.util.y;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class a implements f {

    /* renamed from: a  reason: collision with root package name */
    private final String f28061a;

    /* renamed from: b  reason: collision with root package name */
    private final Properties f28062b;

    /* JADX INFO: Access modifiers changed from: protected */
    public a(String str, Properties properties) {
        this.f28061a = (String) y.c(str, "prefix is required");
        this.f28062b = (Properties) y.c(properties, "properties are required");
    }

    @Override // io.sentry.config.f
    public Map getMap(String str) {
        String str2 = this.f28061a + str + ".";
        HashMap hashMap = new HashMap();
        for (Map.Entry entry : this.f28062b.entrySet()) {
            if ((entry.getKey() instanceof String) && (entry.getValue() instanceof String)) {
                String str3 = (String) entry.getKey();
                if (str3.startsWith(str2)) {
                    hashMap.put(str3.substring(str2.length()), f0.f((String) entry.getValue(), "\""));
                }
            }
        }
        return hashMap;
    }

    @Override // io.sentry.config.f
    public String getProperty(String str) {
        Properties properties = this.f28062b;
        return f0.f(properties.getProperty(this.f28061a + str), "\"");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(Properties properties) {
        this("", properties);
    }
}
