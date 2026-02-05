package kotlin.reflect.jvm.internal.impl.protobuf;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class LazyFieldLite {

    /* renamed from: a  reason: collision with root package name */
    private ByteString f33940a;

    /* renamed from: b  reason: collision with root package name */
    private ExtensionRegistryLite f33941b;

    /* renamed from: c  reason: collision with root package name */
    private volatile boolean f33942c;

    /* renamed from: d  reason: collision with root package name */
    protected volatile MessageLite f33943d;

    protected void a(MessageLite messageLite) {
        if (this.f33943d == null) {
            synchronized (this) {
                if (this.f33943d != null) {
                    return;
                }
                try {
                    if (this.f33940a != null) {
                        this.f33943d = messageLite.getParserForType().parseFrom(this.f33940a, this.f33941b);
                    } else {
                        this.f33943d = messageLite;
                    }
                } catch (IOException unused) {
                }
            }
        }
    }

    public int getSerializedSize() {
        if (this.f33942c) {
            return this.f33943d.getSerializedSize();
        }
        return this.f33940a.size();
    }

    public MessageLite getValue(MessageLite messageLite) {
        a(messageLite);
        return this.f33943d;
    }

    public MessageLite setValue(MessageLite messageLite) {
        MessageLite messageLite2 = this.f33943d;
        this.f33943d = messageLite;
        this.f33940a = null;
        this.f33942c = true;
        return messageLite2;
    }
}
