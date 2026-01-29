package kotlin.reflect.jvm.internal.impl.protobuf;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class LazyFieldLite {

    /* renamed from: a  reason: collision with root package name */
    private ByteString f35234a;

    /* renamed from: b  reason: collision with root package name */
    private ExtensionRegistryLite f35235b;

    /* renamed from: c  reason: collision with root package name */
    private volatile boolean f35236c;

    /* renamed from: d  reason: collision with root package name */
    protected volatile MessageLite f35237d;

    protected void a(MessageLite messageLite) {
        if (this.f35237d == null) {
            synchronized (this) {
                if (this.f35237d != null) {
                    return;
                }
                try {
                    if (this.f35234a != null) {
                        this.f35237d = messageLite.getParserForType().parseFrom(this.f35234a, this.f35235b);
                    } else {
                        this.f35237d = messageLite;
                    }
                } catch (IOException unused) {
                }
            }
        }
    }

    public int getSerializedSize() {
        if (this.f35236c) {
            return this.f35237d.getSerializedSize();
        }
        return this.f35234a.size();
    }

    public MessageLite getValue(MessageLite messageLite) {
        a(messageLite);
        return this.f35237d;
    }

    public MessageLite setValue(MessageLite messageLite) {
        MessageLite messageLite2 = this.f35237d;
        this.f35237d = messageLite;
        this.f35234a = null;
        this.f35236c = true;
        return messageLite2;
    }
}
